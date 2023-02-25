import { ArrowSide } from "../../svg/ArrowSide";
import React from "react";
import styles from "./contactme.module.css";

type LinksProps = {
  href: string;
  name: string;
};

const Links: React.FC<LinksProps> = (props) => {
  return (
    <div className={styles.linksDiv}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <span>{props.name}</span> <ArrowSide />
      </a>
    </div>
  );
};

function ContactMe() {
  return (
    <section className={styles.contactMeSection}>
      <h2>Contact Me</h2>

      <div className={styles.linksParent}>
        <Links href="https://twitter.com/frontend_script" name="Twitter" />
        <Links
          href="https://linkedin.com/in/enoch-fabiyi-bb04331a5/"
          name="LinkedIn"
        />
        <Links href="mailto:ayomikun204@gmail.com" name="Email" />
      </div>
      <footer className={styles.footer}>UI by David</footer>
    </section>
  );
}

export default ContactMe;
