import React from "react";
import GitHub from "../svg/GitHub";
import styles from "./nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <p className={styles.logoName}>Enoch.</p>

      <ul className={styles.navListParent}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://github.com/script8888"
            rel="noreferrer"
          >
            <GitHub />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
