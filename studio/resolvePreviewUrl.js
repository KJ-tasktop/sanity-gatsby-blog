const env = process.env.NODE_ENV || 'development'

export default function resolvePreviewUrl(document) {
	const baseUrl =
		env === 'development' ? 'http://localhost:8000' : 'https://sanity-gatsby-blog-web-wys58wge.netlify.app'
	switch (document._type) {
		case 'route':
			if (!document.slug || !document.slug.current) {
				return baseUrl
			}
			return `${baseUrl}/${document.slug.current}`
		case 'post':
			return `${baseUrl}/blog/${document.slug.current}`
		case 'siteSettings':
			return baseUrl
		case 'page':
			if (document._id === 'homepage' || document._id === 'drafts.homepage') {
				return baseUrl
			}
			return null
		default:
			return null
	}
}
