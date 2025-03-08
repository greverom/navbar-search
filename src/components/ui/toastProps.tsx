import { useState, useEffect } from "react";
import { ToastContainer, ToastMessage } from "../../styles/toastComponent.stile";


interface ToastProps {
  message: string;
  type: "success" | "error" | "warning" | "info";
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, duration = 2000 }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true); 

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    visible && (
      <ToastContainer>
        <ToastMessage $type={type} className={!visible ? "fade-out" : ""}>
          {message}
        </ToastMessage>
      </ToastContainer>
    )
  );
};

export default Toast;