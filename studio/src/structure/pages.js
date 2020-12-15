import S from '@sanity/desk-tool/structure-builder'
import {
	GoMegaphone as BlogIcon,
	GoChecklist as ApprovedIcon,
	GoEye as ReviewIcon,
	GoCircleSlash as RejectedIcon,
	GoArchive as AllIcon,
	GoPerson as AuthorIcon,
} from 'react-icons/go'
import { MdMenu, MdWeb } from 'react-icons/md'
import {CgWebsite} from 'react-icons/cg'
import { GiCobweb, GiSpiderWeb } from 'react-icons/gi'

import PreviewIFrame from '../components/previewIFrame'

export const icons = {
	BlogIcon,
	ApprovedIcon,
	ReviewIcon,
	RejectedIcon,
	AllIcon,
}

const pages = S.listItem()
	.title('Page Builder')
	.icon(GiCobweb)
	.child(
		S.list()
			.title('Pages')
			.items([
				S.listItem()
                    .title('Top Level Pages')
                    .icon(CgWebsite)
					.child(
                        // List out all of the pages with the Top Level Page selected
                        S.documentList()
                            .schemaType('page')
                            .title('pages')
                            .filter('_type == "page" && topLevelPage == true')
					),
				S.listItem()
                    .title('Secondary Pages')
                    .icon(MdWeb)
					.child(
						// List out all categories
						S.documentTypeList('pageCategory')
							.title('Filter Pages by Parent')
							.child((catId) =>
								// List out project documents where the _id for the selected
								// category appear as a _ref in the project’s categories array
								S.documentList()
									.schemaType('page')
                                    .title('Pages')
                                    .filter('_type == "page" && references($catId)')
									.params({ catId })
							)
                    ),
                S.listItem()
					.title('Published pages')
					.schemaType('page')
					.icon(GiSpiderWeb)
					.child(
						S.documentList('page')
							.title('Published pages')
							.menuItems(S.documentTypeList('page').getMenuItems())
							// Only show pages with publish date earlier than now and that is not drafts
							.filter('_type == "page" && !(_id in path("drafts.**")) && (_id != "homepage")')
							.child((documentId) =>
								S.document()
									.documentId(documentId)
									.schemaType('page')
									.views([S.view.form(), PreviewIFrame()])
							)
					),
                S.documentTypeListItem('page').title('All pages').icon(AllIcon),
                S.divider(),
                S.listItem()
					.title('Secondary Navigation Menus')
					.icon(MdMenu)
					.schemaType('navMenuSecondary')
					.child(S.documentTypeList('navMenuSecondary').title('Navigation')),
			])
	)

export default pages
