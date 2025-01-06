import { useState, useEffect } from 'react';
import { getFilesByCategory } from '../services/getFileCategory';

export const useFilesByCategory = (category) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const result = await getFilesByCategory(category)
                setData(result);  
            } catch (err) {
                setError(err.message || 'Error en la conexión');  
            } finally {
                setLoading(false); 
            }
        };

        fetchData();  
    }, [category]);  

    return { data, loading, error };
};
