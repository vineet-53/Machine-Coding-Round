import { forwardRef } from "react";
import { FaSearch } from "react-icons/fa";
function SearchBarFunc({ handleClearSearch, onSearch }, ref) {
  return (
    <div className="flex  items-center gap-5">
      <input
        type="text"
        className="rounded-md py-2 px-4 border border-[#BEBEBE] focus:border-batches-tertiary"
        placeholder="Search by title (alt+k or cmd+k)"
        ref={ref}
        onChange={(e) => {
          if (e.target.value == "") {
            handleClearSearch();
          } else {
            onSearch();
          }
        }}
      />
      <FaSearch
        className="cursor-pointer"
        onClick={() => {
          ref.current.focus();
          onSearch();
        }}
      />
    </div>
  );
}
const SearchBar = forwardRef(SearchBarFunc);
export default SearchBar;
