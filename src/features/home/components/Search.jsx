import { FaSearch } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="flex items-center bg-[#23232e] py-0.5 rounded-xl w-10/12 px-2 text-sm opacity-70">
      <button className="text-gray-300 hover:text-white">
        <FaSearch size={20} />
      </button>
      <input
        type="text"
        placeholder="Search"
        className="ml-2 p-2 bg-transparent text-white placeholder-white outline-none flex-grow"
      />
    </div>
  );
};

export default Search;
