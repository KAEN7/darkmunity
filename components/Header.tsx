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
				<Link href="/">특전 및 스킬</Link>
				<span>|</span>
				<Link href="/maps">지도</Link>
				<span>|</span>
				<Link href="/party">집회소</Link>
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
	padding: 0.5rem 2rem;
	background: rgba(10, 10, 10, 0.23);
	z-index: 98;
`;

const Nav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 15rem;

	a {
		letter-spacing: 0.1rem;
	}
`;

export default Header;
