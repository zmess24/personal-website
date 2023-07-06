import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
	const { site, allMdx } = useStaticQuery(
		graphql`
			query SiteMetaData {
				site {
					siteMetadata {
						github
						linkedIn
					}
				}
				allMdx(sort: { frontmatter: { date: ASC } }) {
					nodes {
						frontmatter {
							date
							title
							description
							technologies
							date
							link
							image {
								childImageSharp {
									gatsbyImageData
								}
							}
							github
						}
					}
				}
			}
		`
	);

	return { ...site.siteMetadata, projects: [...allMdx.nodes] };
};
