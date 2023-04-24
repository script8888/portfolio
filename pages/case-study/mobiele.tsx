import Head from "next/head";
import React from "react";
import styles from "../../styles/CaseStudy.module.css";
import CaseStudy from "../../Components/CaseStudy";
import Script from "next/script";

const imageMapper: Array<string> = [1, 2, 3, 4, 5].map(
	(data) => `/CaseStudy_Images/Mobiele/mobiele${data}.png`
);
const overview: string =
	"Mobiele is a super cool platform based in Africa where you can play mobile games, join tournaments, connect with other gamers, and even win prizes! It's all about gaming fun and competition";
const reflection: string =
	"Developing the tournament management tool with ReactJs was a valuable experience. It allowed me to improve my skills in working with React and understand how to use the React context API for state management. Additionally, the project provided insight into how websites can render multiple pages with a consistent design layout and efficiently manage said pages. Overall, it was a great choice and I'm glad to have had the opportunity to work on it.";
const skillsArray: Array<string> = [
	"React Js",
	"Redux",
	"JavaScript",
	"Bootstrap",
];

function CStudy() {
	return (
		<div>
			<Script
				async
				src="https://www.googletagmanager.com/gtag/js?id=G-12GLBZBC2L"
				strategy="afterInteractive"
			/>
			<Script id="google-analytics" strategy="afterInteractive">
				{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-12GLBZBC2L');
        `}
			</Script>
			<Head>
				<title>Case Study - Mobiele</title>
				<meta name="description" content="Mobiele is a super cool platform based in Africa where you can play mobile games, join tournaments, connect with other gamers, and even win prizes! It's all about gaming fun and competition" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<CaseStudy
				overview={overview}
				reflection={reflection}
				skillsArray={skillsArray}
				screengrab={imageMapper}
				title="Mobiele"
				url="https://themobiele.com"
			>
				{/* <section className={styles.overview}>
          <div className="heading">
            <h3 className={`${styles.headingCustomFontSize} headingH3`}>
              Idea
            </h3>
            <hr className={`headingHR`} />
          </div>
          <p className={styles.overviewContent}>
            I recently used the Citi bikes in NYC. One night my wife and I were
            biking around Brooklyn and my phone died. At this point, we were
            almost 2.5 miles from our car and it was getting late. Since we
            couldn’t rent another bike from her phone, I ended up riding on the
            back of her bike the whole way back. You can guess that this option
            was not comfortable or safe but there was no way to rent another
            bike and we didn’t want to walk.
          </p>
        </section> */}

				<section className={styles.overview}>
					<div className="heading">
						<h3 className={`${styles.headingCustomFontSize} headingH3`}>
							Problem Statement
						</h3>
						<hr className={`headingHR`} />
					</div>

					<div className={styles.pointsCardContainer}>
						<div className={styles.cardCol}>
							<div className={styles.pointCard}>
								<h3>The Problem</h3>
								<p>
									During the course of this project, I faced a few challenges
									with the layout due to my limited knowledge of CSS flexbox, as
									well as with dynamic components and page rendering in ReactJs.
									Moreover, the platform I was using to render each matchday
									bracket did not have crucial data fields required for logging
									scores, which presented some difficulties.
								</p>
							</div>
						</div>
						<div className={styles.cardCol}>
							<div className={styles.pointCard}>
								<h3>The Solution</h3>
								<p>
									I utilized my knowledge of flexbox and gained a deeper
									understanding by putting it into practice. I also enjoyed
									learning about dynamic component rendering in React. And the
									missing data field issue? No problem! I came up with an
									algorithm to generate the necessary data and used it to make
									sure users could log scores with ease.
								</p>
							</div>
						</div>{" "}
						<div className={styles.cardCol}>
							<div className={styles.pointCard}>
								<h3>The Results</h3>
								<p>
									After deploying to production, I spotted a bug that was
									preventing some endpoints from running on iOS. But I took care
									of it and everything was smooth sailing. And the best part?
									Users said that registering for tournaments was a breeze,
									which made my day! A big shoutout to the amazing UI/UX
									designer for making it happen.
								</p>
							</div>
						</div>
					</div>
				</section>
			</CaseStudy>
		</div>
	);
}

export default CStudy;
