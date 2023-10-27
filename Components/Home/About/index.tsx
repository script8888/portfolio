import React, { Fragment } from "react";
import styles from "./about.module.css";
import { skills } from "./Skills";
import { motion } from "framer-motion";

const SkillsComp = (props: any) => (
  <div key={props.id} className={styles.languageDiv}>
    <props.icon className={props.class ? props.class : ""} />
    <p>{props.name}</p>
  </div>
);

const noRenderSkills = ["Bootstrap", "Web3 Js"];

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className="heading">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className="headingH3"
        >
          About Me
        </motion.h3>
        <motion.hr
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className={`headingHR`}
        />
      </div>

      <div className={styles.aboutMeFlex}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
        >
          <p>
            Hi there! I&apos;m Enoch and I love creating responsive and
            user-friendly websites. I&apos;ve been focusing on fullstack
            development for a few years now. It all started back in 2018 when I
            was tinkering with Blogger and trying to understand how blogs were
            made. That curiosity led me to learn HTML/CSS and I&apos;ve been
            hooked ever since!
            <br />
            <br />
            Fast forward to today, I&apos;ve built websites for the freelance
            marketplace, Web3, and esports sectors. I&apos;ve gained experience
            in juggling lots of different tasks, working effectively with others
            as part of a team, and communicating efficiently.
            {/* <br />
            <br />
            The constant change in the techonologies used in frontend
            development is something I find joy in as I am always looking to
            improve and learn cool stuffs. Which is why I tasked myself with
            diving into Web3. And building smart contracts with solidity and
            integrating it to the frontend has been really fun. */}
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>

          <div className={styles.skillsFlex}>
            {skills.map((data) => (
              <Fragment key={data.id}>
                {!noRenderSkills.includes(data.name) && (
                  <SkillsComp
                    name={data.name}
                    class={data.class}
                    icon={data.icon}
                  />
                )}
              </Fragment>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7, type: "tween" }}
          viewport={{ once: true, amount: 0.7 }}
          className={styles.enochParent}
        >
          <img
            className={styles.enochGrid}
            src="/img/dpGridBg.png"
            alt="Enoch Fabiyi"
          />
          <img
            className={styles.enochImg}
            src="/img/Enoch Fabiyi.png"
            alt="Enoch Fabiyi"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
