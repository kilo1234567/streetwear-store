import React from 'react';
import toast from 'react-hot-toast';

interface ToastProps {
  type?: 'success' | 'error' | 'loading' | 'custom';
  message: string;
  duration?: number;
}

export const showToast = ({
  type = 'success',
  message,
  duration = 3000,
}: ToastProps) => {
  const icons = {
    success: '✓',
    error: '✕',
    loading: '○',
    custom: '→',
  };

  const colors = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    loading: 'bg-blue-500',
    custom: 'bg-neutral-900',
  };

  toast.custom(
    (t) => (
      <div
        className={`${colors[type]} text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-2 ${t.visible ? 'animate-slideUp' : 'animate-slideDown'}`}
      >
        <span className="text-lg">{icons[type]}</span>
        <p className="font-medium">{message}</p>
      </div>
    ),
    { duration }
  );
};

export const Toast = { showToast };
