import React, { Component } from "react";
import { Button, Icon, Table } from "semantic-ui-react";
import styled, { keyframes } from "styled-components";
import  MusicForm from "./MusicForm";
import {primaryColor, secondaryColor, tertinaryColor} from "./Color"

class Music extends Component {

  

  state = {
    showForm:false,
    spin: false
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
    this.setState({
      spin: !this.state.spin
    })
  }
  
  render(){
    if (this.state.showForm){
      return(
        <styledCell fluid>
        <MusicForm
        toggleForm={this.toggleForm}
        updateSong={this.props.updateSong}
        {...this.props}/>
        <Button onClick={this.toggleForm} color="green">
          Cancel
        </Button>
        </styledCell>
      )
    }
    return(
      <Table.Row>
        <Table.Cell>
          {this.props.name}
          {this.state.spin ? 
            <>
            <StarSpin>
              <Icon onClick={this.toggleSpin} name="star" />
            </StarSpin >
            <p>
              Click the star to stop the spinning
            </p>
            </>
            : // ternary operator for stars to spin or not spin
            <>
            <Star>
              <Icon onClick={this.toggleSpin} name="star"/>
            </Star>
            <SpinText>
              Click to the Star to spin the star
            </SpinText>
            </>
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

const styledCell = styled(Table.Cell)`
display: flex;
width: fit-content
`

const rotate360 = keyframes`
  0% {
    transform:rotate(0deg);
    color: ${primaryColor};
  }
  33% {
    transform:rotate(120deg);
    color: ${secondaryColor};
  }
  66% {
    transform:rotate(240deg);
    color: ${tertinaryColor};
  }
  100% {
    transform:rotate(360deg);
    color: ${primaryColor};
  }
`;

const StarSpin = styled.div`
  fontsize: 30px;
  display: inline-block;
  animation: ${rotate360} 1.5s linear infinite;
`;

const SpinText = styled.div`
  fontsize:20px
`

const Star = styled.div`
  fontsize: 30px;
  display: inline-block;
  &:hover{
    color: ${tertinaryColor};
  }
`;

export default Music