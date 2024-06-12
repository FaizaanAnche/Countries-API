
import React, { Dispatch, SetStateAction } from "react";
import SearchBar from "./SearchBar";
import FilterRegion from "./FilterRegion";
import styles from "./styles/filter.module.css"
import { filtersProps } from "@/types/types";

export default function Filters({ setSearchFilter, setRegionFilter }: filtersProps) {
  return (
    <div className={styles["filters-container"]}>
      <SearchBar setSearchFilter={setSearchFilter} />
      <FilterRegion setRegionFilter={setRegionFilter} />
    </div>
  );
}
