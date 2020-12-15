import S from '@sanity/desk-tool/structure-builder'
import { MdMenu } from 'react-icons/md'
import { GoBrowser as PageIcon, GoHome, GoSettings } from 'react-icons/go'

import blog from './src/structure/blog'
import pages from './src/structure/pages'
import landingPages from './src/structure/landingPages'
import PreviewIFrame from './src/components/previewIFrame'

const hiddenDocTypes = (listItem) =>
	!['route', 'navMenuPrimary', 'navMenuSecondary', 'pageCategory', 'post', 'page', 'siteSettings', 'author', 'category'].includes(
		listItem.getId()
	)

export default () =>
	S.list()
		.title('Content')
		.items([
			S.documentListItem()
				.schemaType('siteSettings')
				.title('Site settings')
				.icon(GoSettings)
				.child(
					S.document()
						.schemaType('siteSettings')
						.documentId('siteSettings')
						.views([S.view.form(), PreviewIFrame()])
				),
			S.documentListItem()
				.schemaType('navMenuPrimary')
				.title('Primary Navigation')
				.icon(MdMenu)
				.child(
					S.document()
						.schemaType('navMenuPrimary')
						.documentId('primaryNavigation')
						.views([S.view.form(), PreviewIFrame()])
				),
			S.documentListItem()
				.title('Homepage')
				.schemaType('page')
				.icon(GoHome)
				.child(
                    S.document()
                    .schemaType('page')
                    .documentId('homepage')
                    .views([S.view.form(), PreviewIFrame()])
                ),
            blog,
            pages,
			// landingPages,
			// This returns an array of all the document types
			// defined in schema.js. We filter out those that we have
			// defined the structure above
			...S.documentTypeListItems().filter(hiddenDocTypes),
		])
