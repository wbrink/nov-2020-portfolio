import React, {useState} from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <h1>WILL BRINK</h1>
      <p>FULL STACK WEB DEVELOPER</p>
      <a href="#" className={styles.link}>View Portfolio</a>
    </div>
  )
  
}

export default Hero;