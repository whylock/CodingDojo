import styled from "styled-components";

const Button = styled.button`
	padding: 15px 20px;
	border-radius: 6px;
	border: 1px solid black;
	background-color: ${(props) => (props.selected ? "blue" : "white")};
	font-size: 1rem;
	color: ${(props) => (props.selected ? "white" : "blue")};
	transition: all 0.5s ease;
	margin: 0px ${(props) => (props.selected ? "15" : "0")}px;
`;

export default Button;
