import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import NotiBoard from "../components/NotiBoard";
import Popular from "../components/Popular";
import { overflowY, page } from "../styles/theme";

const Home: NextPage = () => {
	return (
		<HomeComponent>
			<Head>
				<title>Darkmunity</title>
				<meta
					name="description"
					content="This is Community website for Dark and Darker, Welcome to Darkmunity "
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Popular />
			<NotiBoard />
		</HomeComponent>
	);
};

const HomeComponent = styled.main`
	${page}
	${overflowY}
`;

export default Home;
