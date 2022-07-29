
import './App.css';
import React, { Component } from 'react';
// import listArticlesCard from './listArticlesCard.js'

class App extends Component{


  constructor(){
    super()
    // this method SUPERCEDES the parent element

    this.state = {
      arrayOfArticles: [],
      isClicked : true

    }
  };

  componentDidMount(){
  axios.get('https://hn.algolia.com/api/v1/search?query=react')
  .then (res => {
    const arrayOfArticles = res.data;
    this.setState({ arrayOfArticles })
  })
  }


  render() {
  return (
    <div className="App">
      <header className="App-header">
      <ol>{this.state.arrayOfArticles.map((articles, index) => {
        return (
          <p>Hey Test!</p>,
          console.log(arrayOfArticles)
        )
      })}</ol>
      </header>
    </div>
  );
  }
}

export default App;
