import React, { Component } from "react";
import { Button, Container, Form } from "semantic-ui-react";
import styled from "styled-components";

class MusicForm extends Component{

  componentDidMount(){
    console.log("Mounted MusicForm")
    console.log(this)
  }

  componentDidUpdate(){
    console.log("Updated Forms")
  }
  componentWillUnmount(){
    console.log("App Unmounted")
  }

  state = {
    name: this.props.name ? this.props.name : "",
    artist: this.props.artist ? this.props.artist : ""
  }

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.name]:value,
    })
    
  }

  handleSubmit = (e) => {
    if (this.props.id){
      this.props.updateSong({id:this.props.id, ...this.state})
      this.props.toggleForm();
    }else{
    this.props.addSong({id: this.props.songs[this.props.songs.length - 1].id + 1, ...this.state});
    }
    this.setState({
      name:"",
      artist:""
    })
  }


  render(){
    return(
      <StyledContainer>
      <h1>Songs Form</h1>
      <Form onSubmit={this.handleSubmit}>
      <h3>{this.props.name ? "Edit Song" : "Add Song"}</h3>
      <Form.Input 
      name = {"name"}
      onChange={this.handleChange}
      value = {this.state.name}
      label="Song Name"/>
      <Form.Input 
      name = {"artist"}
      onChange={this.handleChange}
      value = {this.state.artist}
      label="Artist's Name"/>
      <Button color="green">{this.props.name ? "Edit Song" : "Add Song"}</Button>
      </Form>
      </StyledContainer>
    )
  }
}

const StyledContainer = styled(Container)`
background-color: orange;
padding: 10px;

`

export default MusicForm