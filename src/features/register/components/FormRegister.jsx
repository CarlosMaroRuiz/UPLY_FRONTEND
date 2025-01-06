
import Title from "../../../shared/Title";
import InputForm from "../../../shared/InputForm";
import { Link } from "react-router-dom";
import useRegister from "../hooks/useRegister";
const FormRegister = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    error,
    loading,
    register,
  } = useRegister(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    register(); 
  };

  return (
    <div className="lg:bg-[#100b1d] lg:bg-opacity-50 ld:backdrop-blur-lg lg:px-24 rounded-xl py-16 h-full">
      <p>
        <Title />
      </p>

      <section className="flex flex-col gap-y-8">
        <InputForm
          id="email"
          nameInput="Email"
          value={email} // Vinculamos el valor del estado
          type="email"
          onChange={(e) => setEmail(e.target.value)} // Actualizamos el estado con el cambio
        />

        <InputForm
          id="password"
          nameInput="Password"
          value={password} // Vinculamos el valor del estado
          type="password"
          onChange={(e) => setPassword(e.target.value)} // Actualizamos el estado con el cambio
        />
      </section>
      
      {/* Mostrar error si lo hay */}
      {error && <p className="text-red-500 text-center mt-4">{error}</p>}

      <div className="w-full flex justify-center flex-col">
        <button
          onClick={handleSubmit} // Al hacer clic, enviamos el formulario
          className="text-white bg-[#6d1ce7] text-center px-3 py-1.5 font-black rounded-md w-11/12 mt-10 text-xl"
          disabled={loading} // Deshabilitar el botón mientras se está registrando
        >
          {loading ? 'Registrando...' : 'Registrarme'}
        </button>
        
        <Link className="text-center text-white opacity-80 text-md mt-6" to={"/"}>
          Logearse
        </Link>
      </div>
    </div>
  );
};

export default FormRegister;
