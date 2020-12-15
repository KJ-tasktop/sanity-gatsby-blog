import { graphql } from 'gatsby'

export const SecondaryNavMenu = graphql`
	fragment SecondaryNavMenu on SanityNavMenuSecondary {
		items {
			landingPageRoute {
				title
				slug {
					current
				}
			}
		}
	}
`
