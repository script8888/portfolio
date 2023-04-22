import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aleo:wght@700&family=Public+Sans:wght@300;400;600;700;800;900&family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        />
        <script
					async
					src="https://www.googletagmanager.com/gtag/js?id=G-12GLBZBC2L"
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-12GLBZBC2L');`,
					}}
				>
				</script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
