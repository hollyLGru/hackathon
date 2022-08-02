import React, { useState} from 'react';
import ArticleCard from './ArticleCard';

function ListArticles(props) {
        
    return(
    <ol>
            {props.article.map((article, index) => (
				<ArticleCard key={index} points={article.points} title={article.title} author={article.author} date={article.created_at} url={article.url}/>
			))}
    </ol>
    )
    
};

export default ListArticles; 