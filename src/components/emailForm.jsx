import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import actions from '../actions/emailActions.js';

const Button = styled.button`
  width: 50px;
  height: 20px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  margin: auto;
  padding: 0.25em 1em;
    ${props =>
    props.primary &&
    css`
      background: black;
      color: white;
    `};
`
const Text = styled.div`
  font-family: 'Roboto';
  font-size: 20px;
  font-style: italic;
  margin:auto;
`

const Input = styled.input`
  width: 100px;
  border-radius: 3px;
  border: 2px solid black;
  color: black;
  padding-bottom:20px;

  padding: 20px;
  margin: auto


`

const Div = styled.div`
  width: 100%;
  height: 60vh;

  bottom-border: 4px solid black;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction:Column;
`

class EmailForm extends Component{
    constructor(){
        super();
        this.state = {
            currEmail: null,
            currName: null,
            currCompany: null,
            currPhone: null,
            currMessage: 'Must fill in all categories before we may continue.',
        }
        this.handleInput = this.handleInput.bind(this)
        this.showState = this.showState.bind(this)
    }

    handleInput(e){
        switch(e.target.placeholder){
            case 'Email':
             return this.setState({
                currEmail: JSON.stringify(e.target.value)
              });
            case 'Name':
             return this.setState({
                currName: JSON.stringify(e.target.value)
              });
            case 'Company':
             return this.setState({
                currCompany: JSON.stringify(e.target.value)
              });
            case 'Phone':
             return this.setState({
                currPhone: JSON.stringify(e.target.value)
              });
        }

    }
    showState(){
      // alert is making it slower: for production I would use a modal; not alert
        for(let key in this.state){
          console.log(this.state[key])
          if(this.state[key] === null){
            alert(this.state.currMessage)
            return;
          }
        }
        alert(`Thank you ${this.state.currName}, we will be in contact with ${this.state.currCompany} shortly.`)
    }


    render(){
        return(
            <Div>
                <Text>
                  Get a quote for your company today!
                </Text>
                  <Text>
                    Email Required
                  </Text>
                <Input placeholder='Email' onKeyPress={this.handleInput}/>
                  <Text>
                    Name Required
                  </Text>
                <Input placeholder='Name'onKeyPress={this.handleInput}/>
                  <Text>
                    Company Required
                  </Text>
                <Input placeholder='Company'onKeyPress={this.handleInput}/>
                  <Text>
                    Phone Required
                  </Text>
                <Input placeholder='Phone'onKeyPress={this.handleInput}/>
                <Button value='Send it!' onClick={this.showState}>
                  Send
                </Button>
            </Div>
            )
    }
}

export default EmailForm;
