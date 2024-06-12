import Countries from "@/components/Countries";
import FilterRegion from "@/components/FilterRegion";
import SearchBar from "@/components/SearchBar";
import { types } from "util";
import { getData } from "@/util/data";
import * as apiResponseTypes from "../types/apiResponseTypes";




export default async function Home() {

  const data: apiResponseTypes.Country[] = await getData(
    "https://restcountries.com/v3.1/all"
  );
 
  return (
    <main>
      <Countries data={data} />
    </main>
  );
}
