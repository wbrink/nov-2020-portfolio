import React, {useEffect, useRef} from 'react';
import styles from "./Skills.module.scss";
import mysql from "./mysql-original.svg";
import mongodb from "./mongodb-original.svg";
import reactSVG from "./react-original.svg";
import sass from "./sass-original.svg";
import html5 from "./html5-original.svg";
import socketio from "./Socket-io.svg";
import nodejs from "./nodejs-original.svg";
import css3 from "./css3-original.svg";
import express from "./express-original.svg";
import javascript from "./javascript-original.svg";
import server from "./server1.svg";
import database from "./database2.svg";
import design from "./design2.svg"; 
import { useLocation } from 'react-router-dom';

const Skills = () => {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (location.hash === "#skills") {
      ref.current.scrollIntoView({behavior: "smooth"});
    } else {
      return;
    }
  })

  return (
    <div className={styles.skills} ref={ref}>
      <h1 className="section-title">SKILLS</h1>

      <div className={styles.skillsContainer}>
        <div className={styles.box}>
          <div className={styles.iconContainer2}></div>
          <img className={styles.titleIcon} src={server} alt=""/>
          <h2 className={styles.h2}>BACK-END</h2>
          <ul className={styles.ul}>
            <li><img className={styles.icon} src={nodejs} alt=""/><span>Nodejs</span></li>
            <li><img className={styles.icon} src={express} alt=""/><span>Express</span></li>
            <li><img className={styles.icon} src={socketio} alt=""/><span>Socket.io</span></li>
          </ul>
          <div className={styles.iconContainer}></div>
          
        </div>
        <div className={styles.box}>
          <img className={styles.titleIcon} src={design} alt=""/>
          <h2 className={styles.h2}>FRONT-END</h2>
          <ul className={styles.ul}>
            <li><img className={styles.icon} src={html5} alt=""/><span>HTML5</span></li>
            <li><img className={styles.icon} src={css3} alt=""/><span>CSS3</span></li>
            <li><img className={styles.icon} src={sass} alt=""/><span>SASS</span></li>
            <li><img className={styles.icon} src={javascript} alt=""/><span>Javascript</span></li>
            <li><img className={styles.icon} src={reactSVG} alt=""/><span>React</span></li>
          </ul>
          <div className={styles.iconContainer}></div>
          
        </div>
        <div className={styles.box}>
          <img className={styles.titleIcon} src={database} alt=""/>
          <h2 className={styles.h2}>DATABASES</h2>
          <ul className={styles.ul}>
            <li><img className={styles.icon} src={mysql} alt=""/><span>MySQL</span></li>
            <li><img className={styles.icon} src={mongodb} alt=""/><span>MongoDB</span></li>
          </ul>
          <div className={styles.iconContainer}></div>
            
          
        </div>
      </div>     

    </div>
  )
}

export default Skills;