const InputForm = ({ nameInput, type, value, onChange, id }) => {
    return (
      <div className="flex flex-col gap-y-2">
        <label htmlFor={id} className="text-[#afaea6] font-semibold text-xl">{nameInput}</label>
        <input className="bg-[#15191f] opacity-60 px-2.5 py-1 rounded-md text-xl"
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          required
          placeholder="Ingrese sus datos"
        />
      </div>
    );
  };
export default InputForm;  