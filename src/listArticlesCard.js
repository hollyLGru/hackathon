import React from 'react';
import ArticleCard from './ArticleCard'

function ListArticlesCard(props){
    return (
        <ol>
            {props.articles.map((articles, index) =>{
                return (
                    <ArticleCard
                    key={index}
                    name = {articles.name}
                    />
                )
            })}
        </ol>
    )
}


export default ListArticlesCard;