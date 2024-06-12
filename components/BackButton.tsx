"use client"

import { useRouter } from 'next/navigation'
import styles from './styles/backButton.module.css'
const BackButton = () => {

  const router = useRouter();

  return (
   <div className={styles['button-container']}>
    <button onClick={() => router.back()} 
    className={styles["back-button"]}> ⬅ Back</button>
   </div>
  )
}

export default BackButton