import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeadSection from "../Components/Home/HeadSection";
import Projects from "../Components/Home/Projects";
import About from "../Components/Home/About/";
import ContactMe from "../Components/ContactMe";
import Script from "next/script";

export const metaContent =
  "Experienced Developer, delivering solutions using React, NextJs, TypeScript, Javascript, Firebase, and MongoDB.";
export default function Home() {
  return (
    <div className={styles.container}>
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
        <title>Enoch Fabiyi</title>
        <meta name="description" content={metaContent} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content={"/ogImage.png"} />
        <meta property="og:title" content={"Enoch Fabiyi - Portfolio"} />
        <meta property="og:description" content={metaContent} />
        <meta property="og:url" content={`https://enochfabiyi.dev`} />
        <meta property="og:type" content="website" />
      </Head>

      <div className="parentContainer">
        <HeadSection />
        <Projects />
        <About />
        <ContactMe />
      </div>
    </div>
  );
}
