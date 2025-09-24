import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function createToast(message, variant) {
    const nextToast = [
      ...toasts,
      {
        id: crypto.randomUUID(),
        message,
        variant,
      }
    ];

    setToasts(nextToast);
  };

  function dismissToast(id) {
    const nextToast = toasts.filter((toast) => toast.id !== id);

    setToasts(nextToast);
  }

  return <ToastContext.Provider value={{ toasts, createToast, dismissToast }}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
