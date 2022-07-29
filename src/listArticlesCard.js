import React from 'react';

function listArticlesCard(props){


return (

        <li>
            <h3>{props.tag}</h3>
            <span>{props.date}</span>
            <h2>{props.author}</h2>
            <h1>{props.title}</h1>
        </li>


)

}


export default listArticlesCard;