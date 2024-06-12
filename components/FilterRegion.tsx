import styles from "./styles/filterRegion.module.css"
import { FilterRegionProps } from "@/types/types";


const FilterRegion = ({ setRegionFilter }: FilterRegionProps) => {
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegionFilter(event.target.value);
  };

  return (
    <div className={styles["filter-region"]}>
      <select
        name="region"
        id="region"
        className={styles["filter-region-select"]}
        onChange={handleRegionChange}
      >
        <option value="" disabled selected>
          Filter By Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default FilterRegion;
