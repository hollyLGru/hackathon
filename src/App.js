
import './App.css';
import React, {useState} from 'react'
// import listArticlesCard from './listArticlesCard.js'



function App() {
  const [listArticles, searchForm] = useState([])


    fetch('https://hn.algolia.com/api/v1/search?query=react')
    .then((response) => response.json())
      .then((data) => {
        if (!listArticles.length){
              searchForm(data.results)
        }
      });
      if (listArticles.length){
      }
 
  return (
    <div className="App">
      <header className="App-header">
        <p>Hey</p>
      <ol> {listArticles.map((listArticles, index) => {
        return (
          <li>
            {listArticles.hits.title}
        </li>
        )
      })}
      </ol>

      </header>
    </div>
  );
}

export default App;
