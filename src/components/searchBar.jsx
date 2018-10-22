import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import styled, {css} from 'styled-components';

const Div = styled.div`
  width: 50%;
  height: 35%;
  border-radius: 3px;
  border: 2px;
  background-size: auto

`

const Img = styled.img`
  width: 75%;
  height:10vh;

`

class SearchBar extends Component {

    render(){
       return (
        <Div>
            <Img src='https://s3.amazonaws.com/roostergrin/igniter-logo-white.png'/>
        </Div>
       )
    }
}


export default SearchBar;