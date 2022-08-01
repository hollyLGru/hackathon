import React, { useState} from 'react';
import ArticleCard from './ArticleCard';

function ListArticles(props) {
        
    return(
    <ol>
            {props.article.map((article, index) => (
				<ArticleCard key={index} title={article.title} author={article.author} date={article.created_at}/>
			))}
    </ol>
    )
    
};

export default ListArticles; 