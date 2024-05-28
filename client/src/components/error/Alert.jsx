import React, { useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Alert = ({ error }) => {
  useEffect(() => {
    if (error) {
      toast.error(error, { // Ovde smo ispravili liniju, error se već prosleđuje kao string
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [error]);

  return <ToastContainer />;
};

export default Alert;
