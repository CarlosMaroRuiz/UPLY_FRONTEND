import useAllFile from "../hooks/useAllFiles";
import { useEffect } from "react";
import LoadingData from "./LoadingData";
import FileCharacter from "./FileCharacter";

const AllFiles = () => {
  const { data, loading, error, allFiles } = useAllFile();

  useEffect(() => {
    allFiles();
  }, []);  // Se recomienda pasar `allFiles` como dependencia si la función cambia

  if (loading) {
    return <LoadingData />;
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Agregar manejo de errores
  }

  return (
    <section className="mt-4 flex flex-col gap-y-2">
      {data && data.length > 0 ? (
        data.map((value, index) => (
          <FileCharacter
            name={value.name}
            type={value.category}
            size={value.size}
            key={index}
          />
        ))
      ) : (
        <p>No hay archivos disponibles.</p>
      )}
    </section>
  );
};

export default AllFiles;
