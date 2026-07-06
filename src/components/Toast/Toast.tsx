import React, { useEffect, useState } from 'react';
import { useApp } from '../../context/AppContext';
import './Toast.css';

const Toast: React.FC = () => {
  const { toastMessage } = useApp();
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (toastMessage) {
      setMessage(toastMessage);
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  return (
    <div className="toast-container position-fixed bottom-0 end-0 p-3">
      <div className={`toast align-items-center border-0${visible ? ' show' : ''}`} role="alert">
        <div className="d-flex">
          <div className="toast-body">{message}</div>
          <button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setVisible(false)}></button>
        </div>
      </div>
    </div>
  );
};

export default Toast;
