import type { AppProps } from "next/app";
import "../styles/globals.css";
import Hotjar from "@hotjar/browser";

const siteId = 3462209;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
