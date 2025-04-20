import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import axios from 'axios';
import { useState } from 'react';
import { Button } from './ui/Button';
import { motion } from 'framer-motion';
import { HiOutlineUser, HiOutlineMail, HiOutlinePencilAlt } from 'react-icons/hi';

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
      className="space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {submitStatus.success && (
        <motion.div 
          className="bg-green-900/30 p-4 rounded-md border border-green-500/50 text-green-300 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Message sent successfully!
        </motion.div>
      )}
      
      {submitStatus.error && (
        <motion.div 
          className="bg-red-900/30 p-4 rounded-md border border-red-500/50 text-red-300 text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {submitStatus.error}
        </motion.div>
      )}
      
      <div className="relative">
        <label htmlFor="name" className="sr-only">Name</label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineUser className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="name"
          type="text"
          placeholder="Your Name"
          {...register('name')}
          className="block w-full pl-10 pr-3 py-3 panel-background-style text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm"
        />
        {errors.name && (
          <p className="absolute left-0 -bottom-5 text-xs text-red-400">{errors.name.message}</p>
        )}
      </div>

      <div className="relative mt-6">
        <label htmlFor="email" className="sr-only">Email</label>
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlineMail className="h-5 w-5 text-gray-400" />
        </div>
        <input
          id="email"
          type="email"
          placeholder="Your Email"
          {...register('email')}
          className="block w-full pl-10 pr-3 py-3 panel-background-style text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm"
        />
        {errors.email && (
          <p className="absolute left-0 -bottom-5 text-xs text-red-400">{errors.email.message}</p>
        )}
      </div>

      <div className="relative mt-6">
        <label htmlFor="message" className="sr-only">Message</label>
        <div className="absolute top-3.5 left-0 pl-3 flex items-center pointer-events-none">
          <HiOutlinePencilAlt className="h-5 w-5 text-gray-400" />
        </div>
        <textarea
          id="message"
          rows={5}
          placeholder="Your Message"
          {...register('message')}
          className="block w-full pl-10 pr-3 py-3 panel-background-style text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent sm:text-sm resize-none"
        />
        {errors.message && (
          <p className="absolute left-0 -bottom-5 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          disabled={isSubmitting}
          variant="hero-pill"
          size="lg"
          colorTheme="purple-indigo"
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </motion.form>
  );
} 