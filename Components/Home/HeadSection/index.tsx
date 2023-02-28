import React from "react";
import Nav from "../../nav/Nav";
import ArrowDown from "../../svg/ArrowDown";
import styles from "./headSection.module.css";

function HeadSection() {
  return (
    <section className={styles.HeadSection}>
      <Nav />

      <div className={styles.head_details}>
        <h3 className={styles.head_name}>
          <span className={styles.head_name_MainText}>ENOCH FABIYI</span>{" "}
          <span className={styles.head_name_OutlineText}>ENOCH FABIYI</span>
        </h3>
        <p className={styles.head_desc}>
          Experienced Frontend Web Developer with 3+ years of expertise in
          building dynamic and user-friendly web applications using
          NextJs/ReactJs, JavaScript, MongoDB.
        </p>

        <div className={styles.letsTalkDiv}>
          <p>I’m currently accepting oppotunities,</p>
          <a className="hrefs" href="mailto:ayomikun204@gmail.com">LET’S TALK.</a>
        </div>
        <div className={styles.arrowDownDiv}>
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}

export default HeadSection;
