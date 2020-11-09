import React, { Component } from "react";
import axios from "axios";
import { Button, Typography, Container, TextField } from "@material-ui/core";



export default class DeleteRecipe extends Component {
  constructor(props) {
    super(props);
    //sometimes the props are not passing down correctly
    console.log(props);
    this.state = {
      data: props.data.data,
      title: "",
    };
  }

  deleteRecipe = (event) => {
    event.preventDefault();
    axios
      .delete(`https://bombrecipeapi.herokuapp.com/remove/${this.state.title}`)
      .then((res) => {
        //could do it by status because even if title doesn't exist but api call is good it would show success
        if(res.data != null){
          console.log(this.props.history)
          this.props.history.push('/success')
          // <alert>horray</alert>
        console.log(res.data);
        }else if(res.data == null){
          this.props.history.push('/fail')
        }else{
          this.props.history.push('/fail')
        }
      });
  };

  pushTitleToState = (e) => {
    let element = e.target.value;
    // console.log(element)
    this.setState({ title: element });
  };

  //this came from stack overflow https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  render() {
    return (
      <Container>
        <Typography style={{display:'flex', flexDirection:'column'}}>
          <div>Place name of recipe you would like to delete below</div>
          <TextField
            variant="outlined"
            type="text"
            placeholder="Search By Title"
            onChange={this.pushTitleToState}
          />
        </Typography>
          <Button variant='outlined' color="secondary" type="submit" onClick={this.deleteRecipe}>
            Submit
          </Button>
      </Container>
    );
  }
}
