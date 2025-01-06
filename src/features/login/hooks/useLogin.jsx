import { useState } from 'react';
import { loginService } from '../services/loginService';
import { useNavigate } from 'react-router-dom';
const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const login = async () => {
     
    setLoading(true);
    setError(null);

    try {
      const result = await loginService(email, password);
      
      if(result.message == "Invalid credentials"){
        setError(result.message)
      }

      setData(result);
      localStorage.setItem("token",result.key)
      navigate('/home');
    } catch (err) {
      console.log(err.message)
      
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    data,
    login,
  };
};

export default useLogin;
