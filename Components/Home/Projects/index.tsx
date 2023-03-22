import React from "react";
import styles from "./Projects.module.css";
import { SimpleGrid } from "@chakra-ui/react";
import { projectDetails, projectDetailsType } from "./ProjectDetails";
import Link from "next/link";

const Project = (props: projectDetailsType) => {
  return (
    <Link href={`/case-study/${props.title.toLowerCase()}`}>
      <div className={styles.project}>
        <img src={props.img} alt="1" />
        <div className={styles.hoverDetails}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </div>
    </Link>
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
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing={7}>
          {projectDetails.map(Project)}
        </SimpleGrid>
      </div>
    </section>
  );
}

export default Projects;
