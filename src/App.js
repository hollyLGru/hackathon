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
      selectOptionValue: "author"
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
    return item.created_at.includes(term);
  };
};

handleSearchChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleOptionChange = (e) => {
  this.setState({
    selectOptionValue: e.target.value
  })
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src="https://d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"></img>
          <form>
            <select id="options" onChange={(e) => {this.handleOptionChange(e)}}>
              <option value="author">author</option>
              <option value="date">date</option>
            </select>

            <input
            name="searchTerm"
            type="text"
            value={this.state.searchTerm}
            onChange={(e) => {this.handleSearchChange(e)}}
            placeholder='search by term'
            >
            </input>
          </form>

      </div>




      {this.state.selectOptionValue == "author" ?
						<ListArticles article={this.state.articleArray.filter(this.filterSearchByAuthor(this.state.searchTerm))}/>
					 : <ListArticles article={this.state.articleArray.filter(this.filterSearchByDate(this.state.searchTerm))}/>
           }
          
        




    </header>
    </div>
  )
  }
}

export default App;