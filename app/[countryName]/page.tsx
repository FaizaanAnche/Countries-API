import Link from "next/link";
import { getData } from "@/util/data";
import BackButton from "@/components/BackButton";
import type { Country } from "@/types/apiResponseTypes";
import styles from "./page.module.css"

type countryProps = {
    params: {
      countryName: string;
    };
  };

async function getCountryData(countryName: string): Promise<Country> {
    const data: Country[] = await getData(
      `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    );
  
    return data[0];
}

export default async function Country({ params }: countryProps) {
    const country: Country = await getCountryData(params.countryName);
  
    function getNativeName(country: Country): string {
      if (country.name?.nativeName) {
        const nativeNameKey = Object.keys(country.name.nativeName)[0];
        return country.name.nativeName[nativeNameKey].common;
      }
      return "-";
    }
  
    function getCurrencies(country: Country): string {
      if (country.currencies) {
        const currencies: string[] = [];
  
        Object.keys(country.currencies).forEach((key) => {
          currencies.unshift(country.currencies[key].name);
        });
        return currencies.join(", ");
      }
      return "-";
    }
  
    async function getBorderingCountries(country: Country): Promise<string[]> {
      if (country?.borders !== undefined && country.borders[0] !== "-") {
        const borderingCountriesCodes = country.borders;
        const fullNamesBorderingCountries: string[] = [];
  
        for (let borderingCountryCode of borderingCountriesCodes) {
          const borderingCountry: Country[] = await getData(
            `https://restcountries.com/v3.1/alpha/${borderingCountryCode}`
          );
          const borderingCountryName = borderingCountry[0].name?.common;
          fullNamesBorderingCountries.unshift(borderingCountryName);
        }
  
        return fullNamesBorderingCountries;
      }
      return ["-"];
    }
  
    function getLanguages(country: Country): string {
      if (country.languages !== undefined) {
        const languages: string[] = [];
  
        Object.keys(country.languages).forEach((key) => {
          languages.unshift(country.languages![key]);
        });
        return languages.join(", ");
      }
      return "-";
    }
  
    return (
      <>
        <BackButton />
        <div className={styles["country-container"]}>
          <img
            src={country.flags.svg}
            alt={
              country.flags?.alt
                ? country.flags.alt
                : `The flag of ${country.name}`
            }
            className={styles["flag"]}
          />
          <div className={styles["country-details-container"]}>
            <h2>
              {country.name.common}
            </h2>
            <div className={styles["country-details"]}>
              <div className={styles["details-container"]}>
                <p>
                  <span>Native name:</span>{" "}
                  {getNativeName(country)}
                </p>
                <p>
                  <span>Population:</span>{" "}
                  {country.population.toLocaleString("en-US")}
                </p>
                <p>
                  <span>Region:</span> {country.region}
                </p>
                <p>
                  <span>Sub Region:</span>{" "}
                  {country.subregion ? country.subregion : " -"}
                </p>
                <p>
                  <span>Capital:</span>{" "}
                  {country.capital ? country.capital : " -"}
                </p>
              </div>
              <div className={styles["details-container"]}>
                <p>
                  <span>Top Level Domain:</span>{" "}
                  {country.tld ? country.tld?.join(", ") : " -"}
                </p>
                <p>
                  <span className="font-bold">Currencies:</span>{" "}
                  {getCurrencies(country)}
                </p>
                <p>
                  <span className="font-bold">Languages:</span>{" "}
                  {getLanguages(country)}
                </p>
              </div>
            </div>
              <div className={styles["border-countries-container"]}>
              <p className={styles["border-countries-container-header"]}>Border Countries:</p>{" "}
              <div className={styles["border-countries"]}>
                {(await getBorderingCountries(country)).map((name) => {
                  return name === "-" ? (
                    <span>&nbsp;-</span>
                  ) : (
                    <Link key={name} href={`/${name}`} aria-label={`${name}`}>
                      <button className={styles["border-country"]}>
                        {name}
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }