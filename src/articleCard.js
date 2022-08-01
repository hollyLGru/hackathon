import React from 'react';


const ArticleCard = (props) => {
	const { title, author, date } = props;

	return (
		<li>
				<h1>{title} </h1> 
				<h2>{author} </h2>
                <h3>{date}</h3> 

		</li>
	);
};

export default ArticleCard;