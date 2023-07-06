import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data: { frontmatter } }) => {
	debugger;
	return (
		<main className="card">
			<section className="card-image">
				<a className="image is-4by3" href={frontmatter.link} target="_blank" rel="noreferrer">
					{/* <img src={frontmatter.image} alt="Placeholder" /> */}
				</a>
			</section>
			<section className="card-content">
				<h6 className="subtitle is-6">{frontmatter.title}</h6>
				<p>{frontmatter.description}</p>
				<ul id="tags" className="is-flex-direction-row">
					{frontmatter.technologies &&
						frontmatter.technologies.map((tag) => {
							return (
								<li key={tag} className="tag is-info is-light">
									{tag}
								</li>
							);
						})}
				</ul>
			</section>
			<section className="card-footer">
				<span className="date">{frontmatter.date}</span>
				<a href={frontmatter.github} target="_blank" rel="noreferrer">
					<FontAwesomeIcon size="lg" icon={["fab", "github"]} />
				</a>
			</section>
		</main>
	);
};

export default Card;
