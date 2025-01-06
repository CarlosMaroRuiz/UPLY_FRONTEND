import BoxesBackground from "../../shared/boxesBackground";
import FormRegister from "./components/FormRegister";
import banner from "../../assets/work2.png";
const RegisterView = ()=>{

    return (
        <div className="relative bg-[#0f0c18] w-screen h-screen flex justify-center items-center gap-x-6 overflow-hidden">
        
          {<BoxesBackground/>}
          <section className="z-10">
            <FormRegister/>
          </section>
        
          <section className="hidden lg:block z-10">
            <img src={banner} alt="Banner" className="w-[28rem] h-[28rem]" />
          </section>
    
       
          
        </div>
      );
}

export default RegisterView