import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/globals.css";
import { extendTheme } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "",
          color: "",
          font: "",
          fontSize: "",
          fontFamily: "",
          fontWeight: "",
          lineHeight: "",
        },
      }),
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
