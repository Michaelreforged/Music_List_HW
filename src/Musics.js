import React, { Component } from "react";
import {Table} from "semantic-ui-react";
import Music from "./Music";

//this.props.songs

class Musics extends Component{

  componentDidMount(){
    console.log("Mounted Musics")
    console.log(this)
  }

  componentDidUpdate(){
    console.log("Updated Musics")
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
          {this.props.songs.map((song)=>(
            <Music
            key = {song.id}
            deleteSong = {this.props.deleteSong}
            updateSong = {this.props.updateSong}
            {...song}/>
            ))}
        </Table.Body>
    </Table>
      )
  };
}
export default Musics