import React from 'react';
import ArticleCard from './ArticleCard'

function ListArticlesCard(props){
    return (
        <ol style={{listStyle: "none"}}>
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