import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import ListArticles from './ListArticlesCard';


class App extends Component {
constructor(props){
    super(props)

    this.state={
      articleArray: [],
      searchTerm: ""
    }
  }


componentDidMount() {
  axios.get('http://hn.algolia.com/api/v1/search?tags=front_page')
    .then( res => {
      const articleArray = res.data.hits;
      this.setState({articleArray})
      console.log(articleArray)
    })
}

filterSearch = (term) => {
  return (item) => {
    return item.title.toLowerCase().includes(term.toLowerCase());
  };
};

handleChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
    //e.target.name can be either firstName or lastName below!! instead of doing what we had before: lastName : e.target.value
  })
}


  render() {
  return (
    <div className="App">
      <header className="App-header">
      <form>
        <input
        name="searchTerm"
        type="text"
        value={this.state.searchTerm}
        onChange={(e) => {this.handleChange(e)}}
        placeholder='search by term'
        >
        </input>
      </form>
      {this.state.searchTerm ? 
						<ListArticles article={this.state.articleArray.filter(this.filterSearch(this.state.searchTerm))}/>
					 : 
						<ListArticles article={this.state.articleArray} />
          }
    </header>
    </div>
  )
  }
}

export default App;