import React, {Component} from 'react'
import styled, {css} from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 20vh;
  border-radius: 3px;
  border: 2px solid blue;
  display:grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  justify-content: space-around;

`

const ChildDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: 2px solid blue;
  margin: auto;

`





const contactInfo = () => {
  return (
    <Div>
      <ChildDiv>
        Timeables: Open 8 - 8 etc : address, phone number
      </ChildDiv>

      <ChildDiv>
        pictures of google maps on where we are
      </ChildDiv>

    </Div>
    )
}

export default contactInfo;