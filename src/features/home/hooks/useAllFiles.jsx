import { useState } from "react";
import { getAllFiles } from "../services/getAllFiles";

const useAllFile = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const allFiles = async () => {
    setLoading(true);
    setError(null); 
    try {
      const result = await getAllFiles();
      console.log(result)
      setData(result);
    } catch (err) {
      setError(err.message || "Error en la conexión");
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, allFiles };
};

export default useAllFile;
