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
				<h2>{points} points, {author},  {date.slice(5,10)+"-"+date.slice(0,4)}</h2>


		</li>
	);
};

export default ArticleCard;