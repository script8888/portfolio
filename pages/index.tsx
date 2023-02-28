import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeadSection from "../Components/Home/HeadSection";
import Projects from "../Components/Home/Projects";
import About from "../Components/Home/About/";
import ContactMe from "../Components/ContactMe";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Enoch Fabiyi</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
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
