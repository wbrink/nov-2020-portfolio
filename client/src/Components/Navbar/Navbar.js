import React, {useState} from "react";
import styles from "./Navbar.module.scss"
import {Link} from "react-router-dom";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState({top: "-70vh", color: "rgba(204,204,204,0"});

  const handleToggleMenu = (e) => {
    if (toggleMenu.top === "-70vh") {
      setToggleMenu({top: "100%", color: "rgba(204,204,204,1"});
    } else {
      setToggleMenu({top: "-70vh", color: "rgba(204,204,204,0"});
    }
  }

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul>
          {/* terminal icon */}
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
            <path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 10 10 C 10.25575 10 10.511531 10.097469 10.707031 10.292969 L 14.707031 14.292969 C 15.098031 14.683969 15.098031 15.316031 14.707031 15.707031 L 10.707031 19.707031 C 10.512031 19.902031 10.256 20 10 20 C 9.744 20 9.4879688 19.902031 9.2929688 19.707031 C 8.9019687 19.316031 8.9019687 18.683969 9.2929688 18.292969 L 12.585938 15 L 9.2929688 11.707031 C 8.9019687 11.316031 8.9019687 10.683969 9.2929688 10.292969 C 9.4884687 10.097469 9.74425 10 10 10 z M 16 18 L 20 18 C 20.553 18 21 18.447 21 19 C 21 19.553 20.553 20 20 20 L 16 20 C 15.447 20 15 19.553 15 19 C 15 18.447 15.447 18 16 18 z"></path>
          </svg>
          
          <li><Link to={{pathname: "/", hash: "home"}}>Home</Link></li>
          <li><Link to={{pathname: "/", hash: "about"}}>About</Link></li>
          <li><Link to={{pathname: "/", hash: "skills"}}>Skills</Link></li>
          <li><Link to={{pathname: "/", hash: "portfolio"}}>Portfolio</Link></li>
        </ul>
      </nav>

      {/* mobile navbar */}
      <div className={styles.mobileNav}>
        <svg className={styles.hamburger} onClick={handleToggleMenu} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>

        {/* terminal icon */}
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
          <path d="M 4 3 C 2.895 3 2 3.895 2 5 L 2 8 L 2 23 C 2 24.105 2.895 25 4 25 L 26 25 C 27.105 25 28 24.105 28 23 L 28 7 C 28 5.895 27.105 5 26 5 L 11.199219 5 L 10.582031 3.9707031 C 10.221031 3.3687031 9.5701875 3 8.8671875 3 L 4 3 z M 10 10 C 10.25575 10 10.511531 10.097469 10.707031 10.292969 L 14.707031 14.292969 C 15.098031 14.683969 15.098031 15.316031 14.707031 15.707031 L 10.707031 19.707031 C 10.512031 19.902031 10.256 20 10 20 C 9.744 20 9.4879688 19.902031 9.2929688 19.707031 C 8.9019687 19.316031 8.9019687 18.683969 9.2929688 18.292969 L 12.585938 15 L 9.2929688 11.707031 C 8.9019687 11.316031 8.9019687 10.683969 9.2929688 10.292969 C 9.4884687 10.097469 9.74425 10 10 10 z M 16 18 L 20 18 C 20.553 18 21 18.447 21 19 C 21 19.553 20.553 20 20 20 L 16 20 C 15.447 20 15 19.553 15 19 C 15 18.447 15.447 18 16 18 z"></path>
        </svg>

        <nav style={{top: toggleMenu.top, color: toggleMenu.color}}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </nav>
        
      </div>


    </header>
  )
}

export default Navbar;