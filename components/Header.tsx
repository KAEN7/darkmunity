import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { color } from "../styles/theme";

const Header = () => {
	return (
		<HeaderComponent>
			<Link href="/">
				<Image
					src="/images/logo.png"
					width={100}
					height={100}
					alt="darkmunity"
				/>
			</Link>

			<Nav>
				<Link href="/board">게시판</Link>
				<Link href="/board">특전 & 스킬</Link>
				<Link href="/maps">지도</Link>

				{/* <Link href="/party">집회소</Link> */}
			</Nav>
		</HeaderComponent>
	);
};

const HeaderComponent = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	position: fixed;
	padding: 0.5rem 3rem;
	background: rgba(10, 10, 10, 0.23);
	z-index: 98;
`;

const Nav = styled.nav`
	display: flex;
	align-items: center;

	a {
		letter-spacing: 0.1rem;
		margin-right: 0.5rem;
		padding: 0rem 0.5rem;
		border-right: 1.5px solid ${color.white};

		&:last-child {
			border: none;
			padding-right: 0rem;
			margin-right: 0rem;
		}
	}
`;

export default Header;
