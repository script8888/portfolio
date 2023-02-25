import React from "react";
import styles from "./Projects.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import { projectDetails } from "./ProjectDetails";

const Project = (props: any) => {
  return (
    <div key={props.id} className={styles.project}>
      <img src={props.img} alt="1" />
      <div className={styles.hoverDetails}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className="heading">
        <h3 className="headingH3">Some Things I’ve Built</h3>
        <hr className={`headingHR`} />
      </div>

      <div className={styles.projects_GridParent}>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 3 }} spacing={7}>
          {projectDetails.map(Project)}
          <div className={styles.project}>
            <img src="/projects/1.png" alt="1" />
            <div className={styles.hoverDetails}>
              <h3>100 days of UI</h3>
              <p>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more.
              </p>
            </div>
          </div>
        </SimpleGrid>
      </div>
    </section>
  );
}

export default Projects;
