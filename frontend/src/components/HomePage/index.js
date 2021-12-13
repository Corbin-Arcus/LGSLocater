import React from 'react'
import styles from '../../css-modules/HomePage.module.css'



function HomePage() {


  return (
    <>
      <div className={styles.div}>
        <h1 className={styles.welcome}>Welcome to LGS Locater!</h1>
      </div>
      <footer className={styles.footer}><a className={styles.link} href='https://github.com/Corbin-Arcus'>Check out my Github page!</a></footer>
    </>
  )
}


export default HomePage;
