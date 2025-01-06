
const CardUpload = ({element,text,setCategory}) => {
  const handlerChange = ()=>{
    setCategory(text)
  }
  return (
    <button className="max-w-sm rounded-lg overflow-hidden shadow-lg border-[1px] border-white text-white  w-40 hover:border-opacity-100 transition-all justify-center flex items-center py-4" onClick={handlerChange}>
      <div className="flex items-center gap-4">
      {element}
        <h3 className="text-md font-semibold">{text}</h3>
      </div>
    </button>
  );
};

export default CardUpload;
