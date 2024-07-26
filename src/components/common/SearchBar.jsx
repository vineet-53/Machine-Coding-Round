import { forwardRef } from "react";
function SearchBarFunc({ onSearch }, ref) {
  return (
    <div className="flex gap-2">
      <input
        type="text"
        className="rounded-md py-2 px-4 border border-[#BEBEBE] focus:border-batches-tertiary"
        placeholder="Search by title (alt+k or cmd+k)"
        ref={ref}
      />
      <button
        onClick={() => {
          ref.current.focus();
          onSearch();
        }}
        className="text-[#FFFFFF] py-2 px-4 rounded-md text-xl bg-batches-tertiary"
      >
        Search
      </button>
    </div>
  );
}
const SearchBar = forwardRef(SearchBarFunc);
export default SearchBar;
