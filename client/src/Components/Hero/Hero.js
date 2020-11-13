import React, {useState, useEffect, useRef} from "react";
import styles from "./Hero.module.scss";
import tabletStyle from "./vhs_design_tablet.svg";
import moon from "./vhs_moon.svg";
import {useLocation} from "react-router-dom";

const Hero = (props) => {
  const location = useLocation();
  const heroSectionRef = useRef();

  useEffect(() => {
    console.log("location", location);
    if (location.hash == "#home") {
      heroSectionRef.current.scrollIntoView({behavior: 'smooth'})
    } else {
      return;
    }
  })

  return (
    <div className={styles.hero} ref={heroSectionRef}>
      <div className={styles.heroImages}>
        <img src={tabletStyle} alt="" className={styles.heroIcon}/>
        <svg className={styles.heroMoon} viewBox="0 0 517 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="sun">
          <g id="layer1">
          <path id="path10" d="M372.232 342.142C353.544 371.773 323.853 392.771 289.688 400.519C255.523 408.267 219.679 402.131 190.037 383.46C160.394 364.79 139.378 335.112 131.61 300.951C123.841 266.791 129.956 230.943 148.609 201.29C167.262 171.636 196.927 150.602 231.082 142.813C265.238 135.024 301.089 141.117 330.754 159.752C360.42 178.387 381.471 208.04 389.28 242.191C397.09 276.342 391.019 312.197 372.401 341.873L260.463 271.648L372.232 342.142Z" fill="#780116"/>
          </g>
          <g id="layer3">
          <path id="rect1866" d="M372.232 271.648H260.463V342.142H372.232V271.648Z" fill="#780116"/>
          </g>
          <g className={styles.moonHighlight}>
          <g id="layer2" filter="url(#filter0_f)">
          <path id="path13" d="M353.421 314.591C337.579 339.097 312.412 356.463 283.451 362.871C254.49 369.279 224.106 364.204 198.979 348.763C173.851 333.322 156.037 308.777 149.452 280.526C142.867 252.274 148.05 222.627 163.861 198.103C179.673 173.578 204.819 156.183 233.772 149.741C262.725 143.299 293.115 148.338 318.261 163.75C343.408 179.162 361.252 203.685 367.872 231.929C374.492 260.173 369.346 289.826 353.564 314.369L258.677 256.291L353.421 314.591Z"/>
          </g>
          </g>
          </g>
          <defs>
          <filter id="filter0_f" x="0.570465" y="0.912857" width="516.213" height="510.757" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="73.0462" result="effect1_foregroundBlur"/>
          </filter>
          </defs>
        </svg>
        {/* <img src={moon} alt="" className={styles.heroMoon}/> */}
      </div>
      <h1>WILL BRINK</h1>
      <p>FULL STACK WEB DEVELOPER</p>
      <a href="#" className={styles.link}>View Portfolio</a>
    </div>
  )
  
}

export default Hero;