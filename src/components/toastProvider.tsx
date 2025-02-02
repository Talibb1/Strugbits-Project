import { Toaster, toast } from 'sonner';
import React from 'react';

export const showSuccessToast = (message: string) => {
  toast.success(message);
};

export const showErrorToast = (message: string) => {
  toast.error(message);
};
const ToastProvider: React.FC = () => {
  return <Toaster position="top-center" richColors />;
};

export default ToastProvider;
