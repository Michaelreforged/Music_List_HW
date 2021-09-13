import './App.css';
import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Musics from './Musics';

class App extends Component{

  state = {
    music: [
      { id: 1, name: "Shelter", artist: "Porter Robinson" },
      { id: 2, name: "All Star", artist: "Smahs Mouth" },
      { id: 3, name: "Flyers", artist: "Bradio" },
    ],
  };

  componentDidMount(){
    console.log("Mounted App")
  }
  componentDidUpdate(){
    console.log("Updated")
  }

  render(){
  return(
    <Container>
      <Musics
      music = {this.state.music}/>
    </Container>
  )}
}

export default App;
