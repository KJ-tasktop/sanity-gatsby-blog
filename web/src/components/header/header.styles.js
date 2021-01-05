import styled from 'styled-components'

export const Nav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	/* height: 50px; */
	background-color: #fff;
`

export const NavStyles = styled.div`
	display: grid;
	grid-template-columns: 150px 400px 300px;
	gap: 50px;
	margin: 0;

	li {
		list-style: none;
		text-align: center;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		color: #000;
	}
`

export const LogoContainer = styled.div`
	display: flex;
	flex-grow: 1;
	width: 150px;
	height: 50px;
	align-items: center;
	grid-column-start: 1;

	a {
		display: block;
		width: 150px;
	}
`

export const LeftSideNav = styled.ul`
	display: flex;
	grid-column-start: 2;
	align-items: center;
	justify-content: space-around;
	margin: 0;

	a {
		&:hover,
		&.active {
			color: var(--green);
			border-bottom: 2px solid #000;
			padding-bottom: 14px;
		}
	}
`

export const RightSideNav = styled.ul`
	display: flex;
	grid-column-start: 3;
	align-items: center;
	justify-content: space-around;
	margin: 0;

	a {
		&:hover,
		&.active {
			color: var(--green);
			border-bottom: 2px solid #000;
			padding-bottom: 14px;
		}
	}
`

export const SecondaryNav = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: var(--grey-44);
	width: 100%;
	height: 40px;
`

export const SecondaryNavStyles = styled.ul`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
	width: 950px;
	margin: 0;
	padding: 0;

	li {
		list-style: none;
		margin-bottom: 0;
	}

	a {
		text-decoration: none;
		color: #000;

		&:hover,
		&.active {
			color: var(--green);
		}
	}
`
