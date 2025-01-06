import { useFilesByCategory } from "../hooks/useFileByCategory"
import LoadingData from "./LoadingData";
import FileCharacter
 from "./FileCharacter";
const GetFilesByCategory = ({category})=>{
   const {data,error,loading} = useFilesByCategory(category)
    console.log(data);
    if(loading){
        return <LoadingData/>
    }else{
        console.log(data)
    }
   return  (
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
        <p className="text-white w-full font-bold h-20 justify-center flex items-center text-3xl">No hay archivos disponibles.</p>
      )}
    </section>
  )
}

export default GetFilesByCategory;