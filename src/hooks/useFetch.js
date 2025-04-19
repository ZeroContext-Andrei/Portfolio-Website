import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Custom hook for making API requests
 * @param {string} url - The URL to fetch
 * @param {Object} options - Additional options for axios
 * @returns {Object} - The state of the request
 */
export default function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    // Create an AbortController instance
    const abortController = new AbortController();
    setController(abortController);
    setLoading(true);
    
    // Define async function
    const fetchData = async () => {
      try {
        const response = await axios({
          ...options,
          url,
          signal: abortController.signal,
        });
        
        setData(response.data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Request aborted');
        } else {
          setError(err.message || 'An error occurred');
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };
    
    // Call async function
    fetchData();
    
    // Cleanup: abort the request when component unmounts or url changes
    return () => abortController.abort();
  }, [url, JSON.stringify(options)]);
  
  // Function to manually abort request
  const abort = () => {
    if (controller) {
      controller.abort();
      setLoading(false);
    }
  };

  return { data, loading, error, abort };
} 