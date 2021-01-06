import S from '@sanity/desk-tool/structure-builder'
import { MdMenu } from 'react-icons/md'
import PreviewIFrame from '../components/previewIFrame'

export default S.listItem()
	.title('OLD Page Builder')
	.child(
		S.list()
			.title('Landing Pages')
			.items([
				S.listItem()
					.title('Navigation Menus')
					.icon(MdMenu)
					.schemaType('navMenuSecondary')
					.child(S.documentTypeList('navMenuSecondary').title('Navigation Menus')),
				S.listItem()
					.title('Routes')
					.schemaType('route')
					.child(
						S.documentTypeList('route')
							.title('Routes')
							.child((documentId) =>
								S.document()
									.documentId(documentId)
									.schemaType('route')
									.views([S.view.form(), PreviewIFrame()])
							)
					),
				S.listItem()
					.title('Pages')
					.schemaType('page')
					.child(
						S.documentList('page')
							.title('Pages')
							.menuItems(S.documentTypeList('page').getMenuItems())
							.filter('_type == "page" && _id != "homepage"')
					),
			])
	)
