import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'


function App() {
  const [listArticles, searchForm] = useState([])

  fetchData(){
     fetch('http://hn.algolia.com/api/v1/items/%27')
    .then(response => response.json())
    .then(data => {searchForm(data.results)})
    console.log(listArticles)
  
  }
 
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
