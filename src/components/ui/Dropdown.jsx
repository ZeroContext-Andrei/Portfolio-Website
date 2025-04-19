import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { cn } from '../../lib/utils';

export function Dropdown({ 
  trigger, 
  items, 
  align = 'right',
  width = 'w-56',
  className = '' 
}) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button as={Fragment}>
        {trigger}
      </Menu.Button>
      
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items 
          className={cn(
            'absolute mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
            width,
            align === 'right' ? 'right-0' : 'left-0',
            className
          )}
        >
          <div className="py-1">
            {items.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  item.isDivider ? (
                    <div className="my-1 h-px bg-gray-200" />
                  ) : (
                    <button
                      onClick={item.onClick}
                      className={cn(
                        'block w-full text-left px-4 py-2 text-sm',
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        item.className
                      )}
                      disabled={item.disabled}
                    >
                      {item.icon && (
                        <span className="mr-2 inline-block">{item.icon}</span>
                      )}
                      {item.label}
                    </button>
                  )
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
} 