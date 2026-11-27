import { useEffect } from 'react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export default function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-10 left-1/2 z-[9999] px-6 py-3 bg-gray-800 text-white font-medium rounded-full shadow-lg animate-toast">
      <i className="fa-solid fa-circle-exclamation mr-2 text-secondary"></i>
      {message}
    </div>
  );
}