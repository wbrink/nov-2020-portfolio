import React, {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";
import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const location = useLocation();
  const ref = useRef();

  useEffect(() => {
    if (location.hash === "#portfolio") {
      ref.current.scrollIntoView({behavior: "smooth"})
    } else {
      return;
    }
  })

  return (
    <div className={styles.portfolio} ref={ref}>
      <h1>Portfolio</h1>
    </div>
  )
}

export default Portfolio;
