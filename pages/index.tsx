import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeadSection from "../Components/Home/HeadSection";
import Projects from "../Components/Home/Projects";
import About from "../Components/Home/About/";
import ContactMe from "../Components/ContactMe";
import Script from "next/script";

export default function Home() {
	return (
		<div className={styles.container}>
        <Script id="hotjar" strategy="afterInteractive">
				{`
         (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:3462209,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
        `}
			</Script>
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
