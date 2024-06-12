import React from 'react'
import Link from 'next/link';
import styles from './styles/countryCard.module.css'
import { countryCardProps } from '@/types/types';

const CountryCard = (props: countryCardProps) => {
  return (
    <Link href={`/${props.name}`} className={styles["link"]}>
      <div className={styles["country-card"]}>
        <img
          src={props.flag}
          alt={`The flag of ${props.name}.`}
          className={styles["flag"]}
        />
        <div className={styles["country-details"]}>
          <h2>{props.name}</h2>
          <p>
            <span>Population:</span> {props.population}
          </p>
          <p>
            <span>Region:</span> {props.region}
          </p>
          <p>
            <span>Capital:</span> {props.capital}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default CountryCard