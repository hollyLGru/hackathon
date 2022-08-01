import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import ListArticlesCard from './listArticlesCard';


class App extends Component {
constructor(props){
    super(props)

    this.state={
      arrayOfArticles: [],
      searchForm: "",
    }
  }

handleChange = (e) => {
  this.setState({[e.target.name]: e.target.value
  })
}


componentDidMount() {
  axios.get('http://hn.algolia.com/api/v1/search?query=react') 
    .then(res => {
      const arrayOfArticles = res.data.hits;
      this.setState({arrayOfArticles})
      console.log(arrayOfArticles)
    })
  }

// handleSubmit = (e) => {
//    e.preventDefault()
  
//    }

  filterSearch(term) {
    return(item) => {
      return (
        item.title.toLowerCase().includes(term.toLowerCase())
      )
    }
  }

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Form practice React App</p>
        <form>
          <br></br>
          <label>  
            <input 
            name="searchForm" 
            type="text"
            value={this.state.searchForm} 
            onChange={(e) => {this.handleChange(e)}}
            placeholder="search for Article"></input>
          </label>
          
        </form>
      {
        this.state.searchForm ?
        <ListArticlesCard articles={this.state.arrayOfArticles.filter(this.filterSearch(this.state.searchForm))}></ListArticlesCard> :
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
