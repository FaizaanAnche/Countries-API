import Image from "next/image";
import styles from "./styles/searchBar.module.css"
import { useState, useEffect } from "react";
import { searchProps } from "@/types/types";

const SearchBar = (props: searchProps) => {

  const [filterText, setFilterText] = useState("");

  const handleChange = (text: string) => {
    setFilterText(text);
  };

  useEffect(() => props.setSearchFilter(filterText), [filterText]);

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
      value={filterText}
      onChange={(e) => handleChange(e.target.value)}
      className={styles["search-bar-input"]}/>
    </div>
  )
}

export default SearchBar