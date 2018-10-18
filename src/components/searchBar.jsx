import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import styled, {css} from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 25px;
  border-radius: 3px;
  border: 2px solid red;
`
class SearchBar extends Component {
    constructor(){
        super();
    }

    render(){
       return (
        <Div>
            this is the search bar

        </Div>
       )
    }
}


export default SearchBar;