import { useRef } from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useSearch } from "../../customSearchHook/SearchContextProvider";
import styles from '../../styles/navbar.module.css'

function SearchBar() {
  const { searchTerm, setSearchTerm } = useSearch();
  const searchFieldRef = useRef();
  
  const handleChange = (e) => {
    clearTimeout(changeTimeout)
    const changeTimeout = setTimeout((e) => {
        setSearchTerm(e.target.value), 250
    })
  }
  
  return (
    <div>
      <form>
        <input
          ref={searchFieldRef}
          onChange={(e) => {
            handleChange(e);
          }}
          type="text"
        ></input>
        <Link href="/search">
          <button disabled={!searchTerm}>
            <FiSearch />
          </button>
        </Link>
      </form>
    </div>
  );
}

export default SearchBar;
