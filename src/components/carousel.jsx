import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 3px;
  border: 2px solid black;
  background-color: black;
`

class Carousel extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Div>
        carousel
      </Div>
      )
  }
}

export default Carousel;