import React from 'react';
import { browserHistory as history } from 'react-router';
import logo from './logo1.svg';

const imgMyimageexample = require('./background.JPG');
const divStyle = {
  width: '100%',
  height: '100vh',
  backgroundImage: `url(${imgMyimageexample})`,
  backgroundSize: 'cover'  
};


class Search extends React.Component {
    constructor(props) {
        super(props);
        this._handleSubmit = this._handleSubmit.bind(this);
    }
    
    _handleSubmit(e) {
        e.preventDefault();
        history.push(`/user/${this.refs.userInput.value}`)
        window.location.reload(); 
    }

    render() {
        return (
      
            
            <div className="cComponent" style={divStyle} >
                <div className="search-page1">
                    <form onSubmit={this._handleSubmit}>
                        <input ref="userInput" className="search-page__input" type="text" placeholder = "DOCUMENT NUMBER" />
                        <button className="search-page__button">Search</button>
                    </form> 
                                
                </div>
                
              <img className="logo" src={logo}/>
            </div>
        );
    }
};

export default Search;
