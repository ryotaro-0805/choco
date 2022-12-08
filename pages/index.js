import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  useEffect(()=>{
    document.body.style.color=('blue');
    return()=>{
      document.body.style.color=('black');
    }
    
  },[]);
  
  return (
    <div className={styles.container}>
      <h1><span className={styles.span1}>ち</span><span className={styles.span2}>ょ</span><span className={styles.span3}>こ</span>のかわいい写真ギャラリー</h1>
      <Link className={styles.link} href='/about'>今日の一枚を見る</Link>      
    </div>
  )
}
