// services/fileService.js
export const uploadFile = async (file) => {
    const token = localStorage.getItem("token"); 
    const formData = new FormData();
    formData.append('file', file);
  
    try {
      const response = await fetch(`${import.meta.env.VITE_URL_API}/file/`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error('Error al subir el archivo');
      }
  
      return await response.json();
    } catch (err) {
      throw new Error(err.message || 'Error en la conexión');
    }
  };
  