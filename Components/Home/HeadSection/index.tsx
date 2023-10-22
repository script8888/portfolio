import Link from "next/link";
import React from "react";
import Nav from "../../nav/Nav";
import ArrowDown from "../../svg/ArrowDown";
import styles from "./headSection.module.css";
import { motion } from "framer-motion";

function HeadSection() {
  return (
    <section className={styles.HeadSection}>
      <Nav />

      <div className={styles.head_details}>
        <motion.h3
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8, type: "tween" }}
          className={styles.head_name}
        >
          <span className={styles.head_name_MainText}>ENOCH FABIYI</span>{" "}
          <span className={styles.head_name_OutlineText}>ENOCH FABIYI</span>
        </motion.h3>
        <p className={styles.head_desc}>
          Experienced Developer on deck to deliver solutions using React,
          NextJs, TypeScript, Javascript, Firebase, and MongoDB.
        </p>

        <div className={styles.arrowDownDiv}>
          <Link href="/#projects">
            <ArrowDown />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HeadSection;
