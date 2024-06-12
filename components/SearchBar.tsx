import Image from "next/image";
import styles from "./styles/searchBar.module.css"

const SearchBar = () => {
  return (
    <div className={styles["search-bar"]}>
      <Image 
      src="/search-outline.svg" 
      width={16} 
      height={16} 
      alt="search icon"
      className={styles["search-icon"]}/>
      <input 
      type="text" 
      placeholder='Search for a country...' 
      className={styles["search-bar-input"]}/>
    </div>
  )
}

export default SearchBar