import styled from 'styled-components'

export const ComponentWrapper = styled.div`
	width: 1200px;
	display: flex;
	flex-direction: row;
`

export const CopyPanel = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 24px;
	width: 50%;

	&.sixtyForty {
		width: 40%;
	}

	&.fiftyFiveFortyFive {
		width: 45%;
	}

	img {
		width: 100%;
	}
`

export const MediaPanel = styled.div`
	width: 50%;

	&.sixtyForty {
		width: 60%;
	}

	&.fiftyFiveFortyFive {
		width: 55%;
	}

	img {
		width: 100%;
	}
`
