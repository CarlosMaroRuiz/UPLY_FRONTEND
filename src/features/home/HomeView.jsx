import LogoutButton from "../../shared/Logout";
import Title from "../../shared/Title";
import Search from "./components/Search";
import SectionCard from "./components/SectionCard";
import UploadButton from "../../shared/upload-btn";
import AllFiles from "./components/AllFiles";
import { useState, useEffect } from "react";
import GetFilesByCategory from "./components/FilesByCategory";

const HomeView = () => {
  const [viewSection, setViewSection] = useState(false);
  const [category, setCategory] = useState("");

  
  useEffect(() => {
    if (category !== "") {
      setViewSection(true); 
    } else {
      setViewSection(false);
    }
  }, [category]); 

  return (
    <div className="w-screen h-screen bg-[#09070f] grid grid-cols-[250px_1fr] grid-rows-[1fr]">
    
      <div className="flex items-center flex-col h-full py-5 bg-[#09070f] opacity-80">
        <Title />
        <div className="mt-20 flex-col flex gap-y-8">
          <LogoutButton />
          <UploadButton />
        </div>
        
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col h-full">
        <nav className="p-4">
          <Search />
        </nav>

        {/* Main Content */}
        <main className="flex-grow bg-[#0a0813] p-4 rounded-lg mr-4">
          <h1 className="text-white font-bold text-3xl">Mis archivos</h1>
          <SectionCard setcategory={setCategory} />
          <h2 className="text-white font-bold text-xl mt-3">{!viewSection ? "Todos los archivos" : category}</h2>
          
          {!viewSection ? <AllFiles /> : <GetFilesByCategory category={category}/>}
        </main>
      </div>
    </div>
  );
};

export default HomeView;
