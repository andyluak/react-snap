import styled from "styled-components";

export const SnapContainer = (props) => {
	const SnapContainerStyled = styled.div`
		height: 100vh;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
	`;

	return (
		<SnapContainerStyled>
			{ props.children}
		</SnapContainerStyled>
	);
}