import React, { Component } from "react";
import { Button, Form } from "semantic-ui-react";

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
    name: this.props.songs.name ? this.props.songs.name : "",
    artist: this.props.songs.artist ? this.prop.songs.artist : ""
  }

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.name]:value,
    })
  }

  handleSubmit = (e) => {
    this.props.addSong({...this.state});
    this.setState({
      name:"",
      artist:""
    })
  }


  render(){
    return(
      <div>
      <h1>Songs Form</h1>
      <Form onSubmit={this.handleSubmit}>
      <h3>{this.props.songs.name ? "Edit Song" : "Add Song"}</h3>
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
      <Button color="green">{this.props.songs.name ? "Edit Song" : "Add Song"}</Button>

      </Form>
      </div>
    )
  }


}

export default MusicForm