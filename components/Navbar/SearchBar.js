import { useRef } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "@/hooks/searchHook/SearchContextProvider";

function SearchBar({ setSearchIsOpen, onMobile }) {
  const { searchTerm, setSearchTerm } = useSearch();
  const inputRef = useRef();

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    if (onMobile) {
      setSearchIsOpen(false);
    }
    inputRef.current.value = "";
  };

  return (
    <div>
      <form>
        <input
          ref={inputRef}
          onChange={(e) => handleChange(e)}
          type="text"
        ></input>
        <Link href={{ pathname: "/search", query: { product: searchTerm } }}>
          <button onClick={() => handleClick()}>
            <FiSearch />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
