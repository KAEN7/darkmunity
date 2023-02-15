import "../styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/Header";
import { RecoilRoot } from "recoil";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<RecoilRoot>
			<GlobalStyle />

			<Header />
			<Component {...pageProps} />
		</RecoilRoot>
	);
}

export default MyApp;
