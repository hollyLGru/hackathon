import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListArticlesCard from './ListArticlesCard';


class App extends Component {
constructor(props){
    super(props)

    this.state={
      arrayOfArticles: [],
      searchForm: "",
      author: '',
    }
  }


componentDidMount() {
  axios.get('http://hn.algolia.com/api/v1/search?query=react') 
    .then(res => {
      const arrayOfArticles = res.data.hits;
      this.setState({arrayOfArticles})
    })
  }

  handleSubmit = (e) => {
  e.preventDefault()
  axios.get(`http://hn.algolia.com/api/v1/search?tags=story,author_${this.state.author}`)
.then(function(response){
  const articles = response.data.hits;
  console.log(response.data.hits)
})
.catch(function (error) {
  console.log(error)
})

  this.setState({
    author: ''
  })
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}

filterSearch(term) {
  return(item) => {
    return (item.name.toLowerCase().includes(term.toLowerCase()))
  }
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
      <p>Hacker News Article Search:</p>

      <form onSubmit={(e) => {this.handleSubmit(e)}}>
				<input type="text" onChange={this.handleChange}></input>
				<select value={this.value} onChange={this.handleSelection}>

					<option className="option" value="searchTerm">
						Search by Articles
					</option>

					<option value="author">Search By Author</option>

					<option value="date">Search By Date</option>
				</select>

				<input className="button" type="submit"></input>
			</form>
      {
        this.state.searchForm ?
        <ListArticlesCard articles={this.state.arrayOfArticles.filter(this.filterSearch(this.state.searchForm))}/> :
        <ListArticlesCard articles={this.state.arrayOfArticles} />
      }
    </header>
    </div>
  )
  }
}

export default App;


// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.css';
// import axios from 'axios'


// class App extends Component {
// constructor(props){
//     super(props)

//     this.state={
//       arrayOfArticles: [],
      
//       searchForm: "",
//     }
//   }

// handleChange = (e) => {
//   console.log(e.target.name)
//   this.setState({
//     [e.target.name]: e.target.value
//   })
// }

// handleSubmit = (e) => {
//   e.preventDefault()
// axios.get('http://hn.algolia.com/api/v1/search?query=react', {
//   searchForm: this.state.searchForm,

// })
// .then(function(response){
//   console.log(response.data.hits)
// })
// .catch(function (error) {
//   console.log(error)
// })

//   this.setState({

//     searchForm: ""
//   })
// }

//   render() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Form practice React App</p>
//         <form onSubmit={(e) => {this.handleSubmit(e)}}>
//           <br></br>
//           <label>Search for Article: 
//             <input name="searchForm" type="text" value={this.state.email} onChange={(e) => {this.handleChange(e)}}></input>
//           </label>
//           <br></br>
//           <input type="submit" value="Submit" />
//         </form>
//     </header>
//     </div>
//   )
//   }
// }

// export default App;
