import { FaSignOutAlt } from 'react-icons/fa';  // Importando el ícono de logout
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {

    localStorage.removeItem('token');
    
    navigate('/');
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center text-white bg-[#7909ef] hover:bg-[#944fdf] w-32 h-16 rounded-md justify-center"
    >
      <FaSignOutAlt className="mr-2 text-center" /> 
      Logout
    </button>
  );
};

export default LogoutButton;
