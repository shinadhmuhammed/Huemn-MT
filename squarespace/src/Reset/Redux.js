import { toast } from 'react-toastify';

export const handleResetStore = () => {
  toast.success("Reset your style successfully!");
  setTimeout(() => {
    window.location.href = '/'; 
  }, 2000); 
};
