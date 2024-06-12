import { Dispatch,SetStateAction,PropsWithChildren } from "react";
import * as apiResponseTypes from "./apiResponseTypes"



export interface themeState {
    darkMode: boolean,
    toggleTheme: () => void,
  }
  
export interface filterStates {
  regionFilter: string;
  setRegionFilter: (region: string) => void;
  searchFilter: string;
  setSearchFilter: (search: string) => void;
}

  export interface themeState {
    darkMode: boolean,
    toggleTheme: () => void,
}

export type searchProps = {
    setSearchFilter: Dispatch<SetStateAction<string>>;
};
  
export type filtersProps = {
    setSearchFilter: Dispatch<SetStateAction<string>>;
    setRegionFilter: Dispatch<SetStateAction<string>>;
  };

export type FilterRegionProps = {
    setRegionFilter: (region: string) => void;
  };

export type countryCardProps = PropsWithChildren<{
    name: string;
    flag: string;
    population: string;
    region: string;
    capital: string;
  }>;

export type countriesProps = {
    data: apiResponseTypes.Country[];
  };