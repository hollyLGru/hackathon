import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import ListArticles from './ListArticlesCard';


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

filterSearchByDate = (term) => {
  return (item) => {
    return item.created_at.toLowerCase().includes(term.toLowerCase());
  };
};

handleChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
  })
}


  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"></img>
          <form>
            <select id="options">
              <option value="author">author</option>
              <option value="date">date</option>
            </select>

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
      {this.state.searchTerm ? 
						<ListArticles article={this.state.articleArray.filter(this.filterSearchByAuthor(this.state.searchTerm))}/>
					 : <h1> </h1>
           }
          




    </header>
    </div>
  )
  }
}

export default App;