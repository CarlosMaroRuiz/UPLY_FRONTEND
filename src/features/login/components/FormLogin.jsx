import InputForm from "../../../shared/InputForm";
import Title from "../../../shared/Title";
import useLogin from "../hooks/useLogin";
import { Link } from "react-router-dom";

const FormLogin = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    data,
    login,
  } = useLogin();



  return (
    <div className="lg:bg-[#100b1d] lg:bg-opacity-50 ld:backdrop-blur-lg lg:px-24 rounded-xl py-16 h-full  ">
      {error && <p className="mb-8 text-white font-bold absolute top-10 bg-red-500 w-96 text-center text-2xl">Credenciales invalidas</p>}
      <p >
        <Title />
      </p>

      <section className="flex flex-col gap-y-8">
        <InputForm
          id={"email"}
          nameInput={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type={"email"}
        />

        <InputForm
          id={"password"}
          nameInput={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={"password"}
        />
      </section>
      <div className="w-full flex justify-center flex-col">
        <button className="text-white bg-[#6d1ce7] text-center px-3 py-1.5 font-black rounded-md w-11/12 mt-10 text-xl" onClick={()=>{login()}}>
          Continuar
        </button>
        <Link className="text-center text-white opacity-80 text-md mt-6" to={"/register"}>
          Registrarse
        </Link>
      </div>
    </div>
  );
};

export default FormLogin;
