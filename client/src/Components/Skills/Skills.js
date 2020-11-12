import React from 'react';
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

const Skills = () => {
  return (
    <div className={styles.skills}>
      <h1 className="section-title">SKILLS</h1>

      <div className={styles.skillsContainer}>
        <div className={styles.box}>
          <h2>BACK-END</h2>
          <ul className={styles.ul}>
            <li>Nodejs</li>
            <li>Express</li>
            <li>Socket.io</li>
          </ul>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={nodejs} alt=""/>
            <img className={styles.icon} src={express} alt=""/>
            <img className={styles.icon} src={socketio} alt=""/>
          </div>
          
        </div>
        <div className={styles.box}>
          <h2>FRONT-END</h2>
          <ul className={styles.ul}>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>Javascript</li>
            <li>React</li>
          </ul>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={html5} alt=""/>
            <img className={styles.icon} src={css3} alt=""/>
            <img className={styles.icon} src={sass} alt=""/>
            <img className={styles.icon} src={javascript} alt=""/>
            <img className={styles.icon} src={reactSVG} alt=""/>
          </div>
          
        </div>
        <div className={styles.box}>
          <h2>DATABASES</h2>
          <ul className={styles.ul}>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
          <div className={styles.iconContainer}>
            <img className={styles.icon} src={mysql} alt=""/>
            <img className={styles.icon} src={mongodb} alt=""/>
          </div>
            
          
        </div>
      </div>     

    </div>
  )
}

export default Skills;