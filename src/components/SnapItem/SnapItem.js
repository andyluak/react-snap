import styled from "styled-components";

export const SnapItem = (props) => {
	let SnapItemStyled = styled.div`
		height: 100vh;
		scroll-snap-align: start;
	`;
	return (
		<SnapItemStyled>
			{props.children}
		</SnapItemStyled>
	);
}