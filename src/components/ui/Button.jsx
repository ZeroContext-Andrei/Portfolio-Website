import React, { forwardRef } from 'react';
import { cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const standardButtonVariants = cva(
  'inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:pointer-events-none transform',
  {
    variants: {
      variant: {
        default: 
          'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:scale-105 focus:ring-purple-500',
        destructive: 
          'bg-red-600 text-white shadow-sm hover:bg-red-700 hover:shadow-md focus:ring-red-500',
        outline: 
          'bg-transparent border border-current text-gray-300 shadow-sm hover:bg-gray-700/50 hover:text-white focus:ring-gray-500',
        subtle: 
          'bg-gray-700/50 text-gray-300 hover:bg-gray-700/80 hover:text-white focus:ring-gray-500',
        ghost: 
          'bg-transparent text-gray-300 hover:bg-gray-800/50 hover:text-white focus:ring-gray-500',
        link: 
          'bg-transparent underline-offset-4 hover:underline text-accent-color hover:bg-transparent focus:ring-accent-color',
      },
      size: {
        default: 'h-10 py-2 px-5 text-base',
        sm: 'h-9 px-3 rounded-md text-sm',
        lg: 'h-12 px-8 rounded-lg text-lg',
        icon: 'h-10 w-10 rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

const Button = forwardRef(
  ({ className, variant, size = 'default', colorTheme = 'purple-indigo', children, ...props }, ref) => {
    if (variant === 'hero-pill') {
      const sizeClasses = {
        default: 'px-5 py-2.5 text-base',
        sm: 'px-3 py-1.5 text-sm',
        lg: 'px-8 py-3 text-lg',
        icon: 'p-2.5'
      };
      
      const gradientClasses = {
        'purple-indigo': 'bg-gradient-to-r from-purple-600 to-indigo-600',
        'cyan-blue': 'bg-gradient-to-r from-cyan-400 to-blue-500',
      };

      const shadowClasses = {
        'purple-indigo': 'hover:shadow-purple-500/30 focus:ring-purple-500',
        'cyan-blue': 'hover:shadow-cyan-500/30 focus:ring-cyan-500',
      };
      
      return (
        <button
          ref={ref}
          className={cn(
            'relative group inline-flex items-center justify-center font-medium rounded-full overflow-hidden',
            'p-0.5',
            gradientClasses[colorTheme] || gradientClasses['purple-indigo'],
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
            shadowClasses[colorTheme] || shadowClasses['purple-indigo'],
            'transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg',
            'disabled:opacity-50 disabled:pointer-events-none',
            className
          )}
          {...props}
        >
          <span
            className={cn(
              'block w-full rounded-full',
              'bg-gray-900',
              'text-white',
              sizeClasses[size],
              'transition-all ease-in duration-200 group-hover:bg-transparent group-hover:text-white'
            )}
          >
            {children}
          </span>
        </button>
      );
    } else {
      return (
        <button
          className={cn(standardButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </button>
      );
    }
  }
);

Button.displayName = 'Button';

export { Button }; 