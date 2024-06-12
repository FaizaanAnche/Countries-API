"use client";

import FilterRegion from "./FilterRegion";
import SearchBar from "./SearchBar";
import * as apiResponseTypes from "../types/apiResponseTypes";
import { useState } from "react";
import Filters from "./Filters";
import CountryCard from "./CountryCard";
import styles from "./styles/countries.module.css"
import { countriesProps } from "@/types/types";

const Countries = ({ data }: countriesProps) => {
  const [regionFilter, setRegionFilter] = useState("");
  const countriesFilteredByRegion = data.filter((country) =>
    country.region.toLowerCase().includes(regionFilter.toLowerCase())
  );

  const [searchFilter, setSearchFilter] = useState("");
  const countriesFilteredByRegionAndSearch = countriesFilteredByRegion.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchFilter.toLowerCase())
  );

  const countriesToRender = countriesFilteredByRegionAndSearch.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name.common > b.name.common) {
      return 1;
    }
    return 0;
  });

  return (
    <div className={styles["countries-container"]}>
      <Filters setSearchFilter={setSearchFilter} setRegionFilter={setRegionFilter} />
      {countriesToRender?.length ? (
        <div className={styles["countries"]}>
          {countriesToRender.map((country) => (
            <CountryCard
              key={country.name.official}
              name={country.name.common}
              flag={country.flags.png}
              population={country.population.toLocaleString("en-US")}
              region={country.region}
              capital={
                country?.capital === undefined ? "-" : country.capital[0]
              }
            />
          ))}
        </div>
      ) : (
        <p>{`No country was found`}</p>
      )}
    </div>
  );
};

export default Countries;
