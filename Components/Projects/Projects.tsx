import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <section className={styles.projectsSection}>
      <div className={styles.projects_heading}>
        <h3 className={styles.projects_headingH3}>Some Things I’ve Built</h3>
        <hr className={styles.projects_headingHR} />
      </div>

      <div className={styles.projects_Grid}>
        <div></div>
      </div>
    </section>
  );
}

export default Projects;
