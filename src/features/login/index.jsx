import FormLogin from "./components/FormLogin";
import banner from "../../assets/rb_57831.png";
import BoxesBackground from "../../shared/boxesBackground";

const LoginView = () => {

 
  return (
    <div className="relative bg-[#0f0c18] w-screen h-screen flex justify-center items-center gap-x-6 overflow-hidden">
    
      {<BoxesBackground/>}

    
      <section className="hidden lg:block z-10">
        <img src={banner} alt="Banner" className="w-[28rem] h-[28rem]" />
      </section>

   
      <section className="z-10">
        <FormLogin />
      </section>
    </div>
  );
};

export default LoginView;
