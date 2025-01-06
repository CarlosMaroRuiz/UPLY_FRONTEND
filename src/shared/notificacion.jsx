import { useEffect } from 'react';

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(); // Cierra la notificación después de 3 segundos
    }, 3000);

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar el componente
  }, [onClose]);

  return (
    <div className="fixed top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
      <span>{message}</span>
    </div>
  );
};

export default Notification;
