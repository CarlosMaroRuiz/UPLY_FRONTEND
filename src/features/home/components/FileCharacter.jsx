const FileCharacter = ({ name, type, size }) => {
    return (
      <div className="flex flex-col md:flex-row justify-between items-center bg-gray-800 p-4 rounded-lg mb-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-4 w-full">
          <p className="text-white font-semibold text-lg">{name}</p>
          <div className="flex justify-end w-full md:w-auto space-x-4">
            <p className="text-gray-500 text-sm md:text-base">Tipo: {type}</p>
            <p className="text-gray-500 text-sm md:text-base">{size} Bytes</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default FileCharacter;
  