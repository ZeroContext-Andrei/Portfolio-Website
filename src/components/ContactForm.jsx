import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';

// Form validation schema using Zod
const contactSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState({
    success: false,
    error: null,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const onSubmit = async (data) => {
    try {
      // Call the API
      const response = await axios.post('http://localhost:8000/api/contact', data);
      
      // Show success message
      setSubmitStatus({
        success: true,
        error: null,
      });
      
      // Reset the form
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus({
          success: false,
          error: null,
        });
      }, 5000);
    } catch (error) {
      // Show error message
      setSubmitStatus({
        success: false,
        error: error.message || 'An error occurred. Please try again.',
      });
    }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit(onSubmit)} 
      className="space-y-6 max-w-lg mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {submitStatus.success && (
        <motion.div 
          className="bg-[rgba(56,203,137,0.1)] p-4 rounded-md border border-green-500 text-green-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>Message sent successfully! We'll get back to you soon.</p>
        </motion.div>
      )}
      
      {submitStatus.error && (
        <motion.div 
          className="bg-[rgba(239,68,68,0.1)] p-4 rounded-md border border-red-500 text-red-400"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p>{submitStatus.error}</p>
        </motion.div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
          Name
        </label>
        <input
          id="name"
          type="text"
          {...register('name')}
          className="mt-1 block w-full px-3 py-2 glass-panel border-gray-800 focus:accent-border focus:ring-1 focus:ring-[#22e6d2] text-white"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register('email')}
          className="mt-1 block w-full px-3 py-2 glass-panel border-gray-800 focus:accent-border focus:ring-1 focus:ring-[#22e6d2] text-white"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="mt-1 block w-full px-3 py-2 glass-panel border-gray-800 focus:accent-border focus:ring-1 focus:ring-[#22e6d2] text-white"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-transparent border accent-border accent-color hover:bg-[rgba(34,230,210,0.1)]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </motion.form>
  );
} 