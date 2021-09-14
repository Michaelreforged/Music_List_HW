import React, { Component } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import  MusicForm from "./MusicForm";

class Music extends Component {

  

  state = {
    showForm:false,
    spin: true
  }

  componentDidMount(){
    console.log("Mounted Music")
    console.log(this.props)
  }
  componentDidUpdate(){
    console.log("Updated Music")
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  toggleSpin = () => {
    console.log(this.state.spin)
    this.setState({
      spin: !this.state.spin
    })
  }
  
  render(){
    if (this.state.showForm){
      return(
        <>
        <MusicForm
        toggleForm={this.toggleForm}
        updateSong={this.props.updateSong}
        {...this.props}/>
        <Button onClick={this.toggleForm} color="green">
          Cancel
        </Button>
        </>
      )
    }
    return(
      <Table.Row>
        <Table.Cell>
          {this.props.name}
          {this.state.spin ? 
          <StarSpin>
            <Icon onClick={this.toggleSpin} name="star" />
            </StarSpin >
            :
            <Star>
              <Icon onClick={this.toggleSpin} name="star"/>
            </Star>
          }
          </Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button.Group fluid>
            <Button onClick={this.toggleForm} color="blue">Edit</Button>
            <Button onClick={ () => this.props.deleteSong(this.props.id)} color="red">Delete</Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    )}
} 

const rotate360 = keyframes`
from {
  transform:rotate(0deg);
  color: red;
}
to {
  transform:rotate(360deg);
  color: blue;
}
`;

const StarSpin = styled.div`
  fontsize: 30px;
  display: inline-block;
  color: red;
  animation: ${rotate360} 2s linear infinite;
`;

const Star = styled.div`
  fontsize: 30px;
  display: inline-block;
  color: red;
`;
export default Music