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
        console.log(res.data);
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
    console.log(this.state.data);
    console.log(this.state.title);
    return (
      <Container>
        <Typography style={{display:'flex', flexDirection:'column'}}>
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
