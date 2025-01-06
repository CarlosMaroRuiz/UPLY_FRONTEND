import { FaUpload } from 'react-icons/fa';
import { useState } from 'react';
import { uploadFile } from '../features/home/services/uploadService';
import Notification from './notificacion';

const UploadButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [file, setFile] = useState(null);

  const onFileChange = async (event) => {
    const selectedFile = event.target.files[0];  

    if (selectedFile) {
      setFile(selectedFile);
      setLoading(true);
      setError(null); 

      try {
        
        const response = await uploadFile(selectedFile);

        console.log('Archivo subido:', response); 
        setSuccessMessage('Archivo subido exitosamente');
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false);  
      }
    }
  };

  return (
    <div className="flex items-center justify-center">
      <label
        htmlFor="file-upload"
        className={`cursor-pointer text-white w-32 h-16 justify-center rounded-md flex items-center gap-2 opacity-70 ${loading ? 'opacity-50' : ''}`}
      >
        <FaUpload /> Subir archivo
      </label>
      
      <input
        id="file-upload"
        type="file"
        className="hidden"
        onChange={onFileChange}
      />

      {loading && <span className="text-white ml-2">Subiendo...</span>}
      {error && <span className="text-red-500 ml-2">{error}</span>}
      
      {successMessage && (
        <Notification message={successMessage} onClose={() => setSuccessMessage('')} />
      )}
    </div>
  );
};

export default UploadButton;
