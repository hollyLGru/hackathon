
import './App.css';
import React, {useState} from 'react'
// import listArticlesCard from './listArticlesCard.js'



function App() {
  const [listArticles, searchForm] = useState([])


 fetch('http://hn.algolia.com/api/v1/search?query=react')
    .then(response => response.json())
    .then(data => {searchForm(data.results)})
    // console.log(listArticles)

 
  return (
    <div className="App">
      <header className="App-header">
        <p>Hey</p>
      <ol> {listArticles.map((listArticles, index) => {
        return (
          <li>
          <listArticlesCard key={index} tag={listArticles.tag} date={listArticles.created_at} author={listArticles.author} title={listArticles.title}  />,
           <articleCard key={index} tag={listArticles.tag} date={listArticles.date} author={listArticles.author} title={listArticles.title} />
        </li>
        )
      })}
      </ol>

      </header>
    </div>
  );
}

export default App;
