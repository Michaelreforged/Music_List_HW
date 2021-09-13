import './App.css';
import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import Musics from './Musics';
import MusicForm from './MusicForm';

class App extends Component{

  state = {
    songs: [
      { id: 1, name: "Shelter", artist: "Porter Robinson" },
      { id: 2, name: "All Star", artist: "Smash Mouth" },
      { id: 3, name: "Flyers", artist: "Bradio" },
    ],
  };

  componentDidMount(){
    console.log("Mounted App")
  }
  componentDidUpdate(){
    console.log("Updated App")
  }
  componentWillUnmount(){
    console.log("App Unmounted")
  }

  addSong = (song) => {
    this.setState({
      songs: [...this.state.songs, song]
    })
  }

  deleteSong = (id) => {
    let filterSongs= this.state.songs.filter((s) => s.id !==id)
    this.setState({
      songs: filterSongs,
    })
  }

  render(){
  return(
    <Container>
      <Button fluid>Add New Song</Button>
      <MusicForm
      songs ={this.state.songs}
      addSong={this.addSong}/>
      <Musics
      songs = {this.state.songs}
      deleteSong = {this.deleteSong}/>
    </Container>
  )}
}

export default App;
