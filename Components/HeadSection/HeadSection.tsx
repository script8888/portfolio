import React from "react";
import Nav from "../nav/Nav";
import { ArrowDown } from "../svg/Svg";

function HeadSection({ styles }: any) {
  return (
    <section className={styles.HeadSection}>
      <Nav />

      <div className={styles.head_details}>
        <h3 className={styles.head_name}>
          <span className={styles.head_name_MainText}>ENOCH FABIYI</span>{" "}
          <span className={styles.head_name_OutlineText}>ENOCH FABIYI</span>
        </h3>
        <p className={styles.head_desc}>
          I’m a web developer with 3years+ of experience utilizing several
          programming tools while delivering quality to clients. I possess
          knowledge in frontend and web3 development.
        </p>

        <div className={styles.letsTalkDiv}>
          <p>I’m currently accepting oppotunities,</p>
          <a href="mailto:ayomikun204@gmail.com">LET’S TALK.</a>
        </div>
        <div className={styles.arrowDownDiv}>
          <ArrowDown />
        </div>
      </div>
    </section>
  );
}

export default HeadSection;
