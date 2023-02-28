import React, { Fragment } from "react";
import Nav from "../nav/Nav";
import styles from "../../styles/CaseStudy.module.css";
import { skills } from "../Home/About/Skills";
import ContactMe from "../ContactMe";
import { ArrowSide } from "../svg/ArrowSide";

const SkillsComp = (props: any) => (
  <div className={styles.languageDiv}>
    <props.icon className={props.class ? props.class : ""} />
    <p>{props.name}</p>
  </div>
);

interface Props {
  children: React.ReactNode;
  title: string;
  overview: string;
  screengrab: Array<string>;
  reflection: string;
  skillsArray: Array<string>;
  url: string;
}

function CaseStudy(props: Props) {
  return (
    <>
      <div className={styles.caseStudyContainer}>
        <div className="parentContainer">
          <div className={styles.container}>
            <Nav />
            <h2 className={styles.titleHeading}>{props.title}</h2>
          </div>
        </div>
      </div>

      <div className="parentContainer">
        <div className={styles.contentContainer}>
          <section className={styles.overview}>
            <div className="heading">
              <h3 className={`${styles.headingCustomFontSize} headingH3`}>
                Overview
              </h3>
              <hr className={`headingHR`} />
            </div>
            <p className={styles.overviewContent}>{props.overview}</p>
            <a
              className={`${styles.viewWebsite} hrefs`}
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              <span>View Website</span> <ArrowSide />
            </a>

            <div className={styles.stackDiv}>
              <h3>Stack</h3>
              <div className={styles.stackParent}>
                {skills.map((data, i) => (
                  <Fragment key={data.id}>
                    {props.skillsArray.includes(data.name) && (
                      <SkillsComp
                        class={data.class}
                        icon={data.icon}
                        name={data.name}
                      />
                    )}
                  </Fragment>
                ))}
              </div>
            </div>
          </section>

          {props.children}

          <section className={styles.overview}>
            <div className="heading">
              <h3 className={`${styles.headingCustomFontSize} headingH3`}>
                Screengrabs
              </h3>
              <hr className={`headingHR`} />
            </div>
            <div className={styles.imgDiv}>
              {props.screengrab.map((data, i) => (
                <img key={data} src={data} alt={`${props.title} ${i}`} />
              ))}
            </div>
          </section>

          <section className={styles.overview}>
            <div className="heading">
              <h3 className={`${styles.headingCustomFontSize} headingH3`}>
                Reflection
              </h3>
              <hr className={`headingHR`} />
            </div>
            <p className={styles.overviewContent}>{props.reflection}</p>
          </section>

          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default CaseStudy;
