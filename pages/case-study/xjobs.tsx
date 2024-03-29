import Head from "next/head";
import React from "react";
import styles from "../../styles/CaseStudy.module.css";
import CaseStudy from "../../Components/CaseStudy";
import Script from "next/script";
import { metaContent } from "..";

const data = [1, 2, 4, 5, 6];

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
        <title>Case Study - XJobs</title>
        <meta
          name="description"
          content="XJobs is a web app that helps freelancers and clients connect and securely handle payments with the latest web3 technology for a smooth and safe onboarding process."
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={"/ogImage.png"} />
        <meta property="og:title" content={"Case Study - XJobs"} />
        <meta property="og:description" content={metaContent} />
        <meta
          property="og:url"
          content={`https://enochfabiyi.dev/case-study/xjobs`}
        />
        <meta property="og:type" content="website" />
      </Head>

      <CaseStudy
        overview="XJobs is a web app that helps freelancers and clients connect and securely handle payments with the latest web3 technology for a smooth and safe onboarding process."
        reflection="Interestingly, I got to dive into the backend for the first time and had a blast writing database schemas and API endpoint codes. It was a super fun project for me as it covered a lot of frontend web development areas. Plus, it was my first big project using Next.js and I loved every minute of it. Even after deployment, I faced some challenges with the initial database connection time, but I learned about the server-less cold-start issue and fixed it by sending a 5-minute periodic ping to the server. No more pesky 502 timeout errors!"
        skillsArray={["Next Js", "Redux", "JavaScript", "MongoDB", "Web3 Js"]}
        screengrab={data.map(
          (data) => `/CaseStudy_Images/Xjobs/xjobs${data}.png`
        )}
        title="XJobs"
        url="https://xjobs.io"
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
                  The most challenging aspect of my project was getting up to
                  speed with NextJs, which required me to grasp server-side
                  rendering concepts that were different from what I knew from
                  working with ReactJs. Also, the backend team needed more help
                  since the 3 devs weren`t enough.
                </p>
              </div>
            </div>
            <div className={styles.cardCol}>
              <div className={styles.pointCard}>
                <h3>The Solution</h3>
                <p>
                  To meet the challenge, I quickly learned NextJs & its
                  concepts, including taking a crash course since it`s based on
                  ReactJs. Additionally, I got guidance from a mentor to enhance
                  my project logic & contributed to the backend by writing &
                  reviewing numerous optimized endpoint codes and database
                  schemas.
                </p>
              </div>
            </div>{" "}
            <div className={styles.cardCol}>
              <div className={styles.pointCard}>
                <h3>The Results</h3>
                <p>
                  Despite the initial slow speed of the website, it turned out
                  amazing thanks to taking my mentor`s suggestions into
                  consideration. By slimming down the initial bundle size from
                  700kb to 200kb, the performance of the site improved
                  drastically and was able to skyrocket to new heights.
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
