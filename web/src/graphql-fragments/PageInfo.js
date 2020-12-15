import { graphql } from 'gatsby'

export const PageInfo = graphql`
	fragment PageInfo on SanityPage {
		id
		navMenu {
			...SecondaryNavMenu
		}
		_rawContent(resolveReferences: { maxDepth: 10 })
		title
	}
`
