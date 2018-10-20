import React, {Component} from 'react'
import styled, {css} from 'styled-components';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import API_KEY from './api_key.js'

const Div = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  margin:auto;
  display:grid;
  grid-template-rows: 50% 50%;
  justify-content: space-between;
  align-content: space-between;
  padding: 20px;

`

const Text = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  align-self: center;
`


class MapContainer extends Component {
  render() {
    return (

      <Div >
      <a href="https://www.linkedin.com/in/daryl-lin-613362a0/" className="font-effect-fire-animation">
        <Text>
          CAREERS
        </Text>
      </a>
      <br/>
      <a href="https://github.com/LYRADNIS" className="font-effect-fire-animation">
        <Text>
          GitHub
        </Text>
      </a>
      <br/>
      <a href="https://www.linkedin.com/in/daryl-lin-613362a0/" className="font-effect-fire-animation">
        <Text>
          Blog
        </Text>
      </a>
      <br/>
      <a href="https://www.linkedin.com/in/daryl-lin-613362a0/" className="font-effect-fire-animation">
        <Text>
          Misson Statement
        </Text>
      </a>

      </Div>

    )
  }
}

export default GoogleApiWrapper({
  apiKey: (API_KEY)
})(MapContainer)