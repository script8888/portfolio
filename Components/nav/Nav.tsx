import React from "react";
import GitHub from "../svg/GitHub";
import styles from "./nav.module.css";
import Link from "next/link";

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <p className={styles.logoName}>Enoch.</p>
      </Link>

      <ul className={styles.navListParent}>
        {/* <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li> */}
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
