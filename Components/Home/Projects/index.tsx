import React from "react";
import styles from "./Projects.module.css";
import { projectDetails, projectDetailsType } from "./ProjectDetails";
import Link from "next/link";
import { motion } from "framer-motion";
import useUserMaven from "../../../hooks/useUserMaven";

const Project = (props: projectDetailsType) => {
	return (
		<Link
			target={props.url ? "_blank" : "_self"}
			href={props.url ? props.url : `/case-study/${props.title.toLowerCase()}`}
			onClick={() => {
				props.usermaven?.track(`clicked_${props.title.toLowerCase()}`, {});
			}}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{
					delay: props.id ? 0.5 + props.id * 0.17 : 0.5,
					duration: 1.5,
					type: "tween",
				}}
				viewport={{ once: true, amount: 0.7 }}
				className={styles.project}
			>
				<img src={props.img} alt="1" />
				<div className={styles.hoverDetails}>
					<h3>{props.title}</h3>
					<p>{props.description}</p>
				</div>
			</motion.div>
		</Link>
	);
};

function Projects() {
	const usermaven = useUserMaven();
	return (
		<section id="projects" className={styles.projectsSection}>
			<div className="heading">
				<motion.h3
					initial={{ opacity: 0, x: -20 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.4, duration: 0.8, type: "tween" }}
					viewport={{ once: true, amount: 0.7 }}
					className="headingH3"
				>
					Some Things I’ve Built
				</motion.h3>
				<motion.hr
					initial={{ opacity: 0, x: 15 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 1, type: "tween" }}
					viewport={{ once: true, amount: 0.7 }}
					className={`headingHR`}
				/>
			</div>

			<div className={styles.projects_GridParent}>
				<div className={styles.projectsFlex}>
					{projectDetails.map((data) => (
						<Project
							key={data.id}
							description={data.description}
							img={data.img}
							title={data.title}
							url={data.url}
							id={data.id}
							usermaven={usermaven}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

export default Projects;
