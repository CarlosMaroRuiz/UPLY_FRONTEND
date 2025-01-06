import { useState } from 'react';
import { registerService } from '../services/registerService';
import { useNavigate } from 'react-router-dom';

const useRegister = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const register = async () => {
    setLoading(true);
    setError(null);

    try {
      const result = await registerService(email, password);
      console.log(result)
      if (result.code_error == 400) {
        setError(result.msg); 
      } else {
        navigate('/'); 
      }
    } catch (err) {
      console.log(err.message);
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
    register,
  };
};

export default useRegister;
