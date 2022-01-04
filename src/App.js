import logo from './logo.svg';
import SearchBar from './components/searchbar/SearchBar';
import './App.css';
import React from 'react';

class App extends React.Component{
  state = {
    searchText: ''
  }

  handleChange = (event) => {
    this.state({searchText: event.target.value})
  }
render(){
  return (
    <div className="App">
    <SearchBar handleChange={this.handleChange}></SearchBar>
    </div>
  );
}
}
export default App;
