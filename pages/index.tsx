import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
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
		</HomeComponent>
	);
};

const HomeComponent = styled.main`
	${page}
	${overflowY}

	padding-top: 10rem;
`;

export default Home;
