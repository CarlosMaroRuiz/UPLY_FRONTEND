export const registerService = async (email, password) => {
    try {
     
  
      const response = await fetch(`${import.meta.env.VITE_URL_API}/auth/register`, {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,   
          password 
        }),
      });
  
      
      if (!response.ok) {
        throw new Error('Error al realizar la petición');
      }
  
      const responseData = await response.json();
      return responseData;
  
    } catch (err) {
      console.error('Error en la conexión o en el proceso:', err.message || 'Error en la conexión');
      throw new Error(err.message || 'Error en la conexión');
    }
  };
  