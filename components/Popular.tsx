import Image from "next/image";
import Link from "next/link";
import { withRouter } from "next/router";

import styled from "styled-components";
import { color } from "../styles/theme";

import Title from "./Title";

const Popular = ({ router }: any) => {
	const {
		query: { popular },
	} = router;

	const classPath = popular;

	console.log("classPath", classPath);

	return (
		<PopularComponent>
			<Title>주간 인기글</Title>

			<ListComponent>
				<ClassComponent>
					<Image
						src={`/images/class/${popular ?? "freeBoard"}.png`}
						width={100}
						height={100}
						layout="intrinsic"
						alt={popular}
					/>
				</ClassComponent>

				<Table>
					<TableNav>
						{[
							{ eng: "freeBoard", kor: "자유게시판" },
							{ eng: "fighter", kor: "파이터" },
							{ eng: "barbarian", kor: "바바리안" },
							{ eng: "rouge", kor: "로그" },
							{ eng: "ranger", kor: "레인저" },
							{ eng: "wizard", kor: "마법사" },
							{ eng: "cleric", kor: "클레릭" },
						].map((name: any) => (
							<ClassLink
								href={{
									pathname: "/",
									query: { popular: name.eng ?? "freeBoard" },
								}}
								key={name.eng}
								classPath={
									classPath ? classPath === name.eng : "freeBoard" === name.eng
								}
							>
								{name.kor}
							</ClassLink>
						))}
					</TableNav>

					<TableList>
						{[
							{ title: "제목1", up: 112, down: 12, writer: "카엔" },
							{ title: "제목2", up: 112, down: 12, writer: "카엔" },
							{ title: "제목3", up: 112, down: 12, writer: "카엔" },
							{ title: "제목4", up: 112, down: 12, writer: "카엔" },
							{ title: "제목5", up: 112, down: 12, writer: "카엔" },
							{ title: "제목6", up: 112, down: 12, writer: "카엔" },
						].map(({ title, up, down, writer }) => (
							<li className="item" key={title}>
								<span>{title}</span>

								<div className="scoreboard">
									<span className="writer">작성자: {writer}</span>

									<div className="scoreItem">
										<Image
											src="/images/icons/thumup.png"
											width="12"
											height="12"
											alt="thumup"
										/>
										<span>{up}</span>
									</div>

									<div className="scoreItem">
										<Image
											src="/images/icons/thumdown.png"
											width="12"
											height="12"
											alt="thumdown"
										/>
										<span>{down}</span>
									</div>
								</div>
							</li>
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

	transition: all 0.3s ease-in-out 0s;

	&:hover {
		transform: translateY(-5px);
	}
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

interface IClassLink {
	classPath: boolean;
}

const ClassLink = styled(Link)<IClassLink>`
	background: ${(props) => (props.classPath ? color.point : "none")};
	color: ${(props) => (props.classPath ? color.black : color.white)};
	padding: 0.3rem 1rem;
	border-radius: 11px;
	font-weight: ${(props) => (props.classPath ? "bold" : "400")};
`;

const TableList = styled.ul`
	display: flex;
	flex-direction: column;
	height: 100%;

	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 2.5rem;
		padding: 0 1rem;
		border-radius: 0.5rem;
		background: ${color.lightGray};
		margin-bottom: 1rem;
		cursor: pointer;
	}

	.scoreboard {
		display: flex;
		align-items: center;

		.writer {
			color: gray;
			margin-right: 0.6rem;
			font-size: 0.8rem;
		}

		.scoreItem {
			margin-right: 1rem;

			&:last-child {
				margin: 0;
			}

			img {
				margin-right: 0.5rem;
			}
		}
	}
`;

export default withRouter(Popular);
