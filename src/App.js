import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'


class App extends Component {
constructor(props){
    super(props)

    this.state={
      searchForm: "",
    }
  }

handleChange = (e) => {
  console.log(e.target.name)
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit = (e) => {
  e.preventDefault()

axios.get('http://hn.algolia.com/api/v1/search?query=react', {
  searchForm: this.state.searchForm,

})
.then(function(response){
  console.log(response)
})
.catch(function (error) {
  console.log(error)
})

  this.setState({

    searchForm: ""
  })
}

  render() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Form practice React App</p>
        <form onSubmit={(e) => {this.handleSubmit(e)}}>
          <br></br>
          <label>Email: 
            <input name="searchForm" type="text" value={this.state.email} onChange={(e) => {this.handleChange(e)}}></input>
          </label>
          <br></br>
          <input type="submit" value="Submit" />
        </form>
    </header>
    </div>
  )
  }
}

export default App;
