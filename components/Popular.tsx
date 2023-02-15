import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";

import styled from "styled-components";
import { color, overflowY } from "../styles/theme";

import Title from "./Title";

const Popular = ({ router }: any) => {
	const {
		query: { popular },
	} = router;

	const ranger = popular === "ranger";

	return (
		<PopularComponent>
			<Title>주간 인기글</Title>

			<ListComponent>
				<ClassComponent>
					<Image
						src={`/images/class/${popular}.png`}
						width={100}
						height={100}
						layout="intrinsic"
						alt={`ranger`}
					/>
				</ClassComponent>

				<Table>
					<TableNav>
						{[
							{ eng: "fighter", kor: "파이터" },
							{ eng: "barbarian", kor: "바바리안" },
							{ eng: "rouge", kor: "로그" },
							{ eng: "ranger", kor: "레인저" },
							{ eng: "wizard", kor: "마법사" },
							{ eng: "cleric", kor: "클레릭" },
						].map((name: any) => (
							<Link
								href={{ pathname: "/", query: { popular: name.eng } }}
								key={name.eng}
							>
								{name.kor}
							</Link>
						))}
					</TableNav>

					<TableList>
						{[1, 2, 3, 4, 5, 6, 7].map((el) => (
							<li className="item" key={el}></li>
						))}
					</TableList>
				</Table>
			</ListComponent>
		</PopularComponent>
	);
};

const PopularComponent = styled.div`
	display: flex;
	flex-direction: column;
	width: 50rem;
	padding: 1rem 3rem;
	box-sizing: border-box;
	border-radius: 14px;
	position: relative;
	background: ${color.gray};
`;

const ListComponent = styled.div`
	display: flex;
	width: 100%;
	height: 100%;
`;

const ClassComponent = styled.div`
	position: absolute;
	left: -30px;
	bottom: -50px;
`;

const Table = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const TableNav = styled.nav`
	display: flex;
	justify-content: space-around;
	align-items: center;
	width: 100%;
	margin-bottom: 0.5rem;
	padding-left: 2rem;
`;

const TableList = styled.ul`
	display: flex;
	flex-direction: column;
	height: 100%;

	.item {
		width: 100%;
		height: 2.5rem;
		border-radius: 0.5rem;
		background: ${color.lightGray};
		margin-bottom: 1rem;
	}
`;

export default withRouter(Popular);
