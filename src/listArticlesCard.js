import React from 'react';
import ArticleCard from './ArticleCard';

function ListArticles(props) {
        
    return(
    <ul>
            {props.article.map((article, index) => (
				<ArticleCard key={index} points={article.points} title={article.title} author={article.author} date={article.created_at} url={article.url}/>
			))}
    </ul>
    )
    
};

export default ListArticles; 