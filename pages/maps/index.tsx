import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { withRouter } from "next/router";

import { color, overflowY, page } from "../../styles/theme";
import { useState } from "react";

const Map = ({ router }: any) => {
	const {
		query: { floor },
	} = router;
	const [currentMap, setCurrentMap] = useState("2f_gorge");

	return (
		<MapComponent>
			<Head>
				<title>Darkmunity | 지도</title>
				<meta
					name="description"
					content="This is Community website for Dark and Darker, Welcome to Darkmunity "
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="header">
				{/* <Location href={{ pathname: "/maps", query: { floor: "1f" } }} onActive={floor === '1f'}>
					1F | 고블린
				</Location> */}
				<Location
					href={{ pathname: "/maps", query: { floor: "2f" } }}
					onActive={floor === "2f" || !floor}
				>
					2F | 잃어버린 성
				</Location>
				<Location
					href={{ pathname: "/maps", query: { floor: "3f" } }}
					onActive={floor === "3f"}
				>
					3F | 지옥
				</Location>
			</div>

			<MapContent>
				<NavLocation>
					{(floor === "2f" || !floor) && (
						<>
							<NavBtn
								onActive={currentMap === "2f_gorge"}
								onClick={() => setCurrentMap("2f_gorge")}
							>
								협곡
							</NavBtn>
							<NavBtn
								onActive={currentMap === "2f_maze"}
								onClick={() => setCurrentMap("2f_maze")}
							>
								미로
							</NavBtn>
							<NavBtn
								onActive={currentMap === "2f_stone_pagoda_high_roller"}
								onClick={() => setCurrentMap("2f_stone_pagoda_high_roller")}
							>
								석탑 | 하이롤러
							</NavBtn>
							<NavBtn
								onActive={currentMap === "2f_gorge_high_roller"}
								onClick={() => setCurrentMap("2f_gorge_high_roller")}
							>
								협곡 | 하이롤러
							</NavBtn>
						</>
					)}
					{floor === "3f" && (
						<>
							<NavBtn
								onActive={currentMap === "3f_hell_1"}
								onClick={() => setCurrentMap("3f_hell_1")}
							>
								지옥1
							</NavBtn>
							<NavBtn
								onActive={currentMap === "3f_hell_2"}
								onClick={() => setCurrentMap("3f_hell_2")}
							>
								지옥2
							</NavBtn>
						</>
					)}
				</NavLocation>
				<Image
					src={`/images/map/${currentMap}.png`}
					layout="intrinsic"
					width={800}
					height={800}
					alt={currentMap}
				/>
			</MapContent>
		</MapComponent>
	);
};

const MapComponent = styled.section`
	${page}
	${overflowY}

	.header {
		display: flex;
		justify-content: flex-start;
		width: 50rem;
	}
`;

interface ILocation {
	onActive: boolean;
}

const Location = styled(Link)<ILocation>`
	padding: 0.5rem 1rem;
	border-radius: 14px;
	background: ${(props) => (props.onActive ? color.darkPoint : color.gray)};
	margin-right: 1rem;
	transition: all 0.3s ease-in-out 0s;

	&:hover {
		transform: translateY(-2px);
		background: ${color.darkPoint};
	}
`;

const MapContent = styled.div`
	width: 50rem;
	margin-top: 3rem;
`;

const NavLocation = styled.div`
	display: flex;
	margin-bottom: 1rem;
`;

interface INavBtn {
	onActive: boolean;
}

const NavBtn = styled.button<INavBtn>`
	background: ${(props) =>
		props.onActive ? color.darkPoint : color.lightGray};
	margin-right: 1rem;
	padding: 0.5rem 1rem;
	border-radius: 14px;
	transition: all 0.3s ease-in-out 0s;
	cursor: pointer;

	&:hover {
		transform: translateY(-2px);
		background: ${color.darkPoint};
	}
`;

export default withRouter(Map);
