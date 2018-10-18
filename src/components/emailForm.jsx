import React, { Component } from 'react';
import styled, {css} from 'styled-components';
import actions from '../actions/emailActions.js';

const Button = styled.button`
  width: 50px;
  height: 20px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: auto;
  padding: 0.25em 1em;
    ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
`

const Input = styled.input`
  width: 100px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding-bottom:20px;

  padding: 20px;
  margin: auto

`

const Div = styled.div`
  width: 100%;
  height: 80vh;
  border-radius: 3px;
  border: 2px solid green;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction:Column;
`

class EmailForm extends Component{
    constructor(){
        super();
        this.state = {
            currEmail: '',
            currName: '',
            currCompany: '',
            currPhone: '',
        }
        this.handleInput = this.handleInput.bind(this)
        this.showState = this.showState.bind(this)
    }

    handleInput(e){
        console.log(e.target.placeholder)
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
        console.log(this.state)
    }


    render(){
        return(
            <Div>
                <Button value='Send it!' onClick={this.showState}/>
                <Input placeholder='Email' onKeyPress={this.handleInput}/>
                <Input placeholder='Name'onKeyPress={this.handleInput}/>
                <Input placeholder='Company'onKeyPress={this.handleInput}/>
                <Input placeholder='Phone'onKeyPress={this.handleInput}/>
            </Div>
            )
    }
}

export default EmailForm;
