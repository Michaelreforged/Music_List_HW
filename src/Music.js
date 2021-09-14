import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";
import MusicForm from "./MusicForm";

class Music extends Component {

  state = {showForm:false}
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
        <Table.Cell>{this.props.name}</Table.Cell>
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
export default Music