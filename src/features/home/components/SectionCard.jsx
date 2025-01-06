import { FaFileAlt } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { FaVolumeUp } from 'react-icons/fa';
import { FaVideo } from 'react-icons/fa';
import { FaFileArchive } from 'react-icons/fa';
import { FaFile } from 'react-icons/fa';
import CardUpload from './CardUpload';
const SectionCard = ({setcategory})=>{

    return  <section className="flex mt-8 flex-wrap gap-x-4 justify-between gap-y-6">

    <CardUpload element={<FaFileAlt className="text-red-500" size={28}/>} text={"Documentos"} setCategory={setcategory} />
    <CardUpload element={<FaImage size={28} className="text-blue-500" />} text={"Imagen"} setCategory={setcategory}/>
    <CardUpload element={<FaVolumeUp size={28} className="text-green-500" />} text={"Audio"} setCategory={setcategory}/>
    <CardUpload element={<FaVideo size={28} className="text-orange-500" />} text={"Video"} setCategory={setcategory}/>
    <CardUpload element={<FaFileArchive size={28} className="text-yellow-500" />} text={"Comprimidos"} setCategory={setcategory}/>
    <CardUpload element={<FaFile size={28} className="text-gray-500" />} text={"Otros"} setCategory={setcategory}/>

  </section>
}

export default SectionCard