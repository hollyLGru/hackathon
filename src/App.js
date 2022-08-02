import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import ListArticles from './listArticlesCard';


class App extends Component {
constructor(props){
    super(props)

    this.state={
      articleArray: [],
      searchTerm: "",
      searchDate: ""
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

filterSearchByAuthor = (term) => {
  return (item) => {
    return item.author.toLowerCase().includes(term.toLowerCase());
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
        <div>
          <img src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png" alt="logo"></img>
          <form>
            <input
            name="searchTerm"
            type="text"
            value={this.state.searchTerm}
            onChange={(e) => {this.handleChange(e)}}
            placeholder='search by author'
            >
            </input>
          </form>
      </div>
      <div className="search">
      {this.state.searchTerm ? 
						<ListArticles article={this.state.articleArray.filter(this.filterSearchByAuthor(this.state.searchTerm))}/>
					 : <h1> </h1>
           }
           
						<ListArticles article={this.state.articleArray} />
          </div>




    </header>
    </div>
  )
  }
}

export default App;
