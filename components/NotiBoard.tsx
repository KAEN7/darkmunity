import styled from "styled-components";
import { color } from "../styles/theme";
import Title from "./Title";

const NotiBoard = () => {
	return (
		<NotiListComponent>
			<NotiItemComponent>
				<Title>4차 플레이 테스트 기간</Title>
				<span>23.02.06 오후 9시 ~ 23.02.16 오후 5시</span>
			</NotiItemComponent>

			<NotiItemComponent>
				<Title>업데이트 노트</Title>
			</NotiItemComponent>
		</NotiListComponent>
	);
};

const NotiListComponent = styled.ul`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 10rem;
	padding: 1rem;
	box-sizing: border-box;
`;

const NotiItemComponent = styled.li`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 20rem;
	border-radius: 15px;
	border: 8px solid ${color.darkPoint};
	margin: 1rem;
	padding: 1rem;
	box-sizing: border-box;
	transition: all 0.3s ease-in-out 0s;

	&:hover {
		transform: translateY(-5px);
	}

	&:nth-child(2) {
		border: 8px solid ${color.point};
	}
`;

export default NotiBoard;
