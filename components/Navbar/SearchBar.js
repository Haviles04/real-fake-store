import { useRef } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../customSearchHook/SearchContextProvider";
import styles from "../../styles/navbar.module.css";

function SearchBar({ setSearchIsOpen, onMobile }) {
  const { searchTerm, setSearchTerm } = useSearch();

  const handleChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  return (
    <div>
      <form>
        <input onChange={(e) => handleChange(e)} type="text"></input>
        <Link href={`/search?product=${searchTerm}`}>
          <button>
            <FiSearch />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
