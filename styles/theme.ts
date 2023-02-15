import { css, keyframes } from "styled-components";

// 기기 사이즈
export const size = {
	mobileS: "320px",
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

// 미디어 스타일
const theme = {
	mobileS: `(max-width: ${size.mobileS})`,
	mobileM: `(max-width: ${size.mobileM})`,
	mobileL: `(max-width: ${size.mobileL})`,
	tablet: `(max-width: ${size.tablet})`,
	laptop: `(max-width: ${size.laptop})`,
	laptopL: `(max-width: ${size.laptopL})`,
	desktop: `(min-width: ${size.desktop})`,
	desktopL: `(min-width: ${size.desktop})`,
};

// color
export const color = {
	white: "#fefefe",
	black: "#181a1e",
	gray: "#1C1D21",
	point: "#FFDB60",
	lightGray: "#353945",
};

export const page = css`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	width: 100vw;
	height: 100vh;
	padding: 1rem;
	box-sizing: border-box;
	background: linear-gradient(
		180deg,
		#0d0d0d 0%,
		rgba(11, 11, 11, 0.39) 46.88%,
		rgba(10, 10, 10, 0.53) 100%
	);
`;

export const overflowY = css`
	overflow-y: auto;
	::-webkit-scrollbar {
		display: none;
	}
`;

const fadeInKeyframe = keyframes`
	from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
`;

export const fadeIn = css`
	animation: ${fadeInKeyframe} 3s;
`;

export const FormStyle = css`
	display: flex;
	justify-content: center;
	align-items: center;
	letter-spacing: 0.2rem;

	.point {
		color: ${color.point};
		font-size: 3rem;
		margin: 0;
		padding: 0;
	}
`;

export const Thumb = css`
	text-align: center;
	font-size: 1.7rem;
	font-weight: bold;
	background: ${color.point};
	color: ${color.black};
	width: 2.5rem;
	height: 2.5rem;
	min-width: 2.5rem;
	min-height: 2.5rem;
`;

export default theme;
