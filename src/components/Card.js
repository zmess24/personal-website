import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ data }) => {
	return (
		<main className="card">
			<section className="card-image">
				<a className="image is-4by3" href={data.link} target="_blank" rel="noreferrer">
					<img src={data.image} alt="Placeholder" />
				</a>
			</section>
			<section className="card-content">
				<h6 className="subtitle is-6">{data.title}</h6>
				<p>{data.description}</p>
				<ul id="tags" className="is-flex-direction-row">
					{data.technologies &&
						data.technologies.map((tag) => {
							return (
								<li key={tag} className="tag is-info is-light">
									{tag}
								</li>
							);
						})}
				</ul>
			</section>
			<section className="card-footer">
				<span className="date">{data.date}</span>
				<a href={data.github} target="_blank" rel="noreferrer">
					<FontAwesomeIcon size="lg" icon={["fab", "github"]} />
				</a>
			</section>
		</main>
	);
};

export default Card;
