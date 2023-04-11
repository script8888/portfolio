import React from "react";
import GitHub from "../svg/GitHub";
import styles from "./nav.module.css";
import Link from "next/link";
import { motion } from "framer-motion";

function Nav() {
	return (
		<nav className={styles.nav}>
			<Link href="/">
				<motion.p
					initial={{ opacity: 0, x: -30 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ delay: 0.5, duration: 0.8, type: "tween" }}
					className={styles.logoName}
				>
					Enoch.
				</motion.p>
			</Link>

			<motion.ul
				initial={{ opacity: 0, x: 30 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 0.5, duration: 0.8, type: "tween" }}
				className={styles.navListParent}
			>
				{/* <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li> */}
				<li>
					<a
						target="_blank"
						href="https://github.com/script8888"
						rel="noreferrer"
					>
						<GitHub />
					</a>
				</li>
			</motion.ul>
		</nav>
	);
}

export default Nav;
