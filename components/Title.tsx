import styled from "styled-components";
import { color } from "../styles/theme";

interface ITitle {
	children: string;
}

const Title = ({ children }: ITitle) => {
	return <Text>{children}</Text>;
};

const Text = styled.h3`
	font-size: 2rem;
	color: ${color.point};
`;

export default Title;
