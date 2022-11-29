import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import styles from "./about.module.css";
import {
  NextJsIco,
  JavascriptIco,
  TypeScriptIco,
  SolidityIco,
  ReactJsIco,
  FireBaseIco,
  ReduxIco,
} from "../svg/Svg";

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
            Hello! My name is Enoch and I enjoy developing responsive and
            functional websites. Frontend development has been my main focus for
            some years now, it all started back in 2018 when I was playing
            around Blogger, trying to figure out how blogs were built. And some
            months later, I began learning HTML/CSS.
            <br />
            <br />
            Fast-forward to today, I have built website in the esports
            tournaments sector, and experience in managing lots of varied tasks,
            collaborating with others as part of a team, and effective
            communication
            <br />
            <br />
            The constant change in the techonologies used in frontend
            development is something I find joy in as I am always looking to
            improve and learn cool stuffs. Which is why I tasked myself with
            diving into Web3. And building smart contracts with solidity and
            integrating it to the frontend has been really fun.
            <br />
            <br />
            Here are a few technologies I’ve been working with recently:
          </p>

          <SimpleGrid columns={{ sm: 3, md: 3, lg: 3 }} spacing={3}>
            <div className={styles.languageDiv}>
              <NextJsIco className={styles.nextIco} />
              <p>Next Js</p>
            </div>
            <div className={styles.languageDiv}>
              <TypeScriptIco />
              <p>TypeScript</p>
            </div>
            <div className={styles.languageDiv}>
              <ReduxIco />
              <p>Redux</p>
            </div>
            <div className={styles.languageDiv}>
              <ReactJsIco />
              <p>React Js</p>
            </div>
            <div className={styles.languageDiv}>
              <JavascriptIco />
              <p>JavaScript</p>
            </div>
            <div className={styles.languageDiv}>
              <FireBaseIco />
              <p>Firebase</p>
            </div>
            <div className={styles.languageDiv}>
              <SolidityIco className={styles.solidityIco} />
              <p>Solidity</p>
            </div>
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
