
const SearchBar = () => {
  return (
    <>
      <div className="bg-gray-800 rounded-4xl py-3 w-[20em] px-4 ">
        <label htmlFor="search"></label>
        <input
          type="search"
          placeholder="search product..."
          className="w-full focus:outline-none"
        />
      </div>
    </>
  );
}

export default SearchBar
