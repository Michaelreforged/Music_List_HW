import React, { Component } from "react";
import { Button, Table } from "semantic-ui-react";

class Music extends Component {

  componentDidMount(){
    console.log("Mounted Music")
    console.log(this.props)
  }
  componentDidUpdate(){
    console.log("Updated Music")
  }

  
  render(){
    return(
      <Table.Row>
        <Table.Cell>{this.props.name}</Table.Cell>
        <Table.Cell>{this.props.artist}</Table.Cell>
        <Table.Cell>
          <Button.Group fluid>
            <Button  color="blue">Edit</Button>
            <Button onClick={ () => this.props.deleteSong(this.props.id)} color="red">Delete</Button>
          </Button.Group>
        </Table.Cell>
      </Table.Row>
    )}
} 
export default Music