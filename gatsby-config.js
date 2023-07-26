/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
	siteMetadata: {
		siteUrl: "https://www.zacmessinger.com",
		title: "ZDM Portfolio",
		description: "Personal Website for Zac Messinger",
		linkedIn: "https://www.linkedin.com/in/zacmessinger/",
		github: "https://github.com/zmess24",
	},
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-gatsby-cloud",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "./src/assets/images/logo.png",
			},
		},
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `projects`,
				path: `./src/projects`,
			},
		},
		"gatsby-plugin-mdx",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: `./src/assets/images/`,
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
