export const getAllFiles = async () => {
    const token = localStorage.getItem("token"); 
    try {
      const response = await fetch(`${import.meta.env.VITE_URL_API}/file/files`, {
        method: 'GET', // Método GET, ya que no estamos enviando datos en el cuerpo
        headers: {
          'Authorization': `Bearer ${token}`,  // Solo el token JWT en el encabezado Authorization
        },
      });
  
      if (!response.ok) {
        throw new Error('Error al realizar la petición');  // Manejo de errores si la respuesta no es exitosa
      }
  
      return await response.json();  // Si todo es correcto, se parsea y se retorna la respuesta en formato JSON
    } catch (err) {
      throw new Error(err.message || 'Error en la conexión');  // Manejo de errores en caso de fallo en la conexión o el fetch
    }
};
