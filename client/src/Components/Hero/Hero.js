import React, {useState} from "react";
import styles from "./Hero.module.scss";
import tabletStyle from "./vhs_design_tablet.svg";
import moon from "./vhs_moon.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroImages}>
        <img src={tabletStyle} alt="" className={styles.heroIcon}/>
        <img src={moon} alt="" className={styles.heroMoon}/>
      </div>
      <h1>WILL BRINK</h1>
      <p>FULL STACK WEB DEVELOPER</p>
      <a href="#" className={styles.link}>View Portfolio</a>
    </div>
  )
  
}

export default Hero;