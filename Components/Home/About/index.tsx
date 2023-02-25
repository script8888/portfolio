import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import styles from "./about.module.css";
import { skills } from "./Skills";

const SkillsComp = (props: any) => (
  <div key={props.id} className={styles.languageDiv}>
    <props.icon className={props.class ? props.class : ""} />
    <p>{props.name}</p>
  </div>
);

function About() {
  return (
    <section className={styles.aboutSection}>
      <div className="heading">
        <h3 className="headingH3">About Me</h3>
        <hr className={`${styles.h3Hr} headingHR`} />
      </div>

      <div className={styles.aboutMeFlex}>
        <div>
          <p>
            Hi there! I&apos;m Enoch and I love creating responsive and
            user-friendly websites. I&apos;ve been focusing on frontend
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

          <SimpleGrid columns={{ sm: 3, md: 3, lg: 3 }} spacing={3}>
            {skills.map(SkillsComp)}
          </SimpleGrid>
        </div>
        <div className={styles.enochParent}>
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
        </div>
      </div>
    </section>
  );
}

export default About;
