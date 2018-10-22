import React, {Component} from 'react'
import styled, {css} from 'styled-components';
import CareerTab from './CareerTab.jsx'


const Div = styled.div`
  width: 100%;
  height: 25vh;
  border-radius: 3px;
  border: 2px;
  display:grid;
  grid-template-columns: 500px 500px;
  justify-content: center;
  justify-content: space-around;
  background-color:black;

`

const ChildDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin: auto;
  background-color: white ;
  font-family:Roboto-bold;
  background-color: black;
`
const Text = styled.div`
  font-family: Roboto;
  font-size: 20px;
  margin:auto;
`
const googleStyle = {
  objectFit: 'fill',
  maxWidth: '20%',
  maxHeight: '20%',
}


const contactInfo = () => {
  return (
    <Div>
      <ChildDiv>
        <Text className='font-effect-fire-animation'>
        <h3 > Universe C132: Open 8:00 A.M to 10:00 P.M</h3>
        Knock on the door and ask for Rick.
        <br/>
        If he's not there, ask for Morty.
        Wubba Lubba Dub Dub: 907-112-3842
        <br/>
        1938 GetShwifty Street, San Francisco
        </Text>

      </ChildDiv>

      <ChildDiv>
        <CareerTab style={googleStyle}/>
      </ChildDiv>

    </Div>
    )
}

export default contactInfo;