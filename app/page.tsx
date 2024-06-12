import Countries from "@/components/Countries";
import FilterRegion from "@/components/FilterRegion";
import SearchBar from "@/components/SearchBar";


export default function Home() {
  return (
    <main>
      <SearchBar/>
      <FilterRegion/>
      <Countries/>
    </main>
  );
}
