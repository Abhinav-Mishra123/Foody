import React, { useEffect, useState } from "react";
import "../Styles/Menu.css";


const Toast = ({ message, showToast, setShowToast }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showToast) {
      setIsVisible(true);
      setTimeout(() => {
        setIsVisible(false);
        setShowToast(false);
      }, 3000); // Toast will be visible for 3 seconds
    }
  }, [showToast, setShowToast]);

  return (
    <div className={`toast-container ${isVisible ? "show" : ""}`}>
      <div className="toast">
        <span className="toast-message">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
