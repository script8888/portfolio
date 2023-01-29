import React from "react";
import ArrowSide from "../svg/ArrowSide";
import styles from "./contactme.module.css";

function ContactMe() {
  return (
    <section className={styles.contactMeSection}>
      <h2>Contact Me</h2>

      <div className={styles.linksParent}>
        <div className={styles.linksDiv}>
          <a
            href="https://twitter.com/frontend_script"
            target="_blank"
            rel="noreferrer"
          >
            <span>Twitter</span> <ArrowSide />
          </a>
        </div>

        <div className={styles.linksDiv}>
          <a
            href="https://linkedin.com/in/enoch-fabiyi-bb04331a5/"
            target="_blank"
            rel="noreferrer"
          >
            <span>LinkedIn</span>
          </a>
        </div>

        <div className={styles.linksDiv}>
          <a
            href="mailto:ayomikun204@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <span>Email</span>
          </a>
        </div>
      </div>
      <footer className={styles.footer}>UI by David</footer>
    </section>
  );
}

export default ContactMe;
