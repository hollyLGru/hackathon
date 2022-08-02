
import React from 'react';


const ArticleCard = (props) => {
	const { title, author, date, url, points } = props;

	return (
		<li>
				<h1>
                    <a href={url}>
                        {title}
                    </a> <p>{url}</p>
                </h1> 
				<h2>{points} points, {author},  {date}</h2>


		</li>
	);
};

export default ArticleCard;