import React, { Component } from "react";
import { Button, Table} from "semantic-ui-react";
import Music from "./Music";

//this.props.music

class Musics extends Component{

  componentDidMount(){
    console.log("Mounted Musics")
    console.log(this)
  }
  componentDidUpdate(){
    console.log("Updated")
  }


  render() { 

    return(

      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Song</Table.HeaderCell>
            <Table.HeaderCell>Artist</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell colSpan='3'>
              <Button fluid>Add New Song</Button>
            </Table.Cell>
          </Table.Row>
          {this.props.music.map((song)=>(
            <Music
            {...song}/>
            ))}
        </Table.Body>
    </Table>
      )
  };
}
export default Musics