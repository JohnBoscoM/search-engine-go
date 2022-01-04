import React from 'react'
import './components/SearchBar.css';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {text: ''};
        this.handleChange = this.handleChange.bind(this);
      
}
    render(){
    return(
        <div>
            <h3>GO</h3>
            <input className='searchBox'
            id = "searchBar"
            onChange={this.handleChange}
            value={this.state.text}
            />  
        </div>
    );
    }


handleChange(e){
    this.setState({value: e.target.value});
}
}

export default SearchBar;
