export const getFilesByCategory = async (category) => {
    const token = localStorage.getItem("token"); 
    try {
        const response = await fetch(`${import.meta.env.VITE_URL_API}/file/files/category/${category}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,  
            },
        });

        if (!response.ok) {
            throw new Error('Error al realizar la petición');
        }

        return await response.json(); 
    } catch (err) {
        throw new Error(err.message || 'Error en la conexión');
    }
};
