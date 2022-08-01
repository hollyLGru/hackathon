import React from 'react';
import ArticleCard from './articleCard'

function ListArticlesCard(props){
    return (
        <ol >
            {props.articles.map((articles, index) =>{
                return (
                    <ArticleCard
                    key={index}
                    index={index}
                    title = {articles.title}
                    />
                )
            })}
        </ol>
    )
}


export default ListArticlesCard;