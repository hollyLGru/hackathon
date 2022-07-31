import React from 'react';
import ArticleCard from './ArticleCard'

function ListArticlesCard(props){
    return (
        <ul>
            {props.articles.map((articles, index) =>{
                return (
                    <ArticleCard
                    key={index}
                    name = {articles.name}
                    />
                )
            })}
        </ul>
    )
}


export default ListArticlesCard;