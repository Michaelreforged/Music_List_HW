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
      songs: [song, ...this.state.songs]
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
      songs = {this.state.songs}/>
    </Container>
  )}
}

export default App;
