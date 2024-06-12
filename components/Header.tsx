"use client"

import Image from "next/image"
import styles from "./styles/header.module.css"
import { useEffect } from "react";
import { useThemeStore } from "@/store/store";

const Header = () => {
    const {darkMode, toggleTheme} = useThemeStore();

    useEffect(() => {
        if (darkMode) {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
        } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        }
    }, [darkMode]);

  return (
    <header className={styles["site-header"]}>
        <p>Where in the world?</p>
        <div className={styles["theme-switcher"]} onClick={toggleTheme}>
            {/* <Image src="/moon-outline.svg" alt="moon icon" height={16} width={16}></Image> */}
            <p> ☾ Dark Mode</p>
        </div>
    </header>
  )
}

export default Header;