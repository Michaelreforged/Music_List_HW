import './App.css';
import React, { Component } from 'react';
import { Button, Container } from 'semantic-ui-react';
import Musics from './Musics';
import MusicForm from './MusicForm';
import styled from 'styled-components';

class App extends Component{

  state = {
    songs: [
      { id: 1, name: "Shelter", artist: "Porter Robinson" },
      { id: 2, name: "All Star", artist: "Smash Mouth" },
      { id: 3, name: "Flyers", artist: "Bradio" },
    ],
    showForm:false
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

  updateSong = (song) => {
    let updateSongs = this.state.songs.map((s) =>
    s.id === song.id ? song : s)
    this.setState({
      songs: updateSongs
    })
  }

  toggleForm = () => {
    this.setState({
      showForm: !this.state.showForm
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
    <AppContainer>
      <Container>
      <Button fluid onClick={this.toggleForm}>Add New Song</Button>
      
      {this.state.showForm && <MusicForm
      songs ={this.state.songs}
      addSong={this.addSong}/>}
      <Musics
      songs = {this.state.songs}
      deleteSong = {this.deleteSong}
      updateSong = {this.updateSong}/>
      </Container>
    </AppContainer>
  )}
}

const AppContainer = styled.div`
  min-height: 100vh;
  background: rgb(2,0,36);
  background: linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(11,194,58,.92) 50%, rgba(10,0,255,1) 100%);
`

export default App;
