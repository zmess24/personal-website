/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		title: `ZDM Personal Site`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	plugins: [
		"gatsby-plugin-postcss",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/assets/images/logo.png",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `projects`,
				path: `${__dirname}/src/projects`,
			},
		},
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/assets/images/",
			},
			__key: "images",
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "pages",
				path: "./src/pages/",
			},
			__key: "pages",
		},
	],
};
