import { graphql } from 'gatsby'

export const SecondaryNavMenu = graphql`
	fragment SecondaryNavMenu on SanityNavMenuSecondary {
		items {
			landingPageRoute {
				id
				title
				slug {
					current
				}
			}
		}
	}
`
