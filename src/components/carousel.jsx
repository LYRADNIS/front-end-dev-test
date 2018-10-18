import React, { Component } from 'react';
import styled, {css} from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100vh;
  border-radius: 3px;
  border: 2px solid black;
`

class Carousel extends Component {
  constructor(){
    super()
  }

  render(){
    return (
      <Div>
        this is where the carousel will go
      </Div>
      )
  }
}

export default Carousel;