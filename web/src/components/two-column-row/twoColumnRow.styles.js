import styled from 'styled-components'

export const ComponentWrapper = styled.div`
	width: 1200px;
	display: flex;
	flex-direction: row;
`

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 24px;
	width: 40%;

	img {
		width: 100%;
	}
`

export const RightSide = styled.div`
	width: 60%;

	img {
		width: 100%;
	}
`
