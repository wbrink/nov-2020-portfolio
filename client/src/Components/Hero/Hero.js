import React, {useState} from "react";
import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero} style={{zIndex: "-2"}}>
      <h1>WILL BRINK</h1>
      <p>FULL STACK WEB DEVELOPER</p>
    </div>
  )
  
}

export default Hero;