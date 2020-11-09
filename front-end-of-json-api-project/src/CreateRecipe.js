import React, { Component } from "react";
import Header from "./Header";
import { Button, Typography, Container, TextField } from "@material-ui/core";
import axios from "axios";

class CreateRecipe extends Component {
  constructor() {
    super();

    this.state = {
      title: "",
      summary: "",
      cuisines: [],
      ingredients: [],
      instructions: [],
    };
  }
  // app.post("/new", recipeController.create);

  postInput = (event) => {
    event.preventDefault();

    const recipe = {
      title: this.state.title,
      summary: this.state.summary,
      cuisines: this.state.cuisines,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
    };
    axios
      .post(`https://bombrecipeapi.herokuapp.com/new`, recipe)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  pushTitleToState = (e) => {
    let element = e.target.value;
    // console.log(element)
    this.setState({ title: element });
  };

  pushSummaryToState = (e) => {
    let element = e.target.value;
    // console.log(element)
    this.setState({ summary: element });
  };

  pushCuisinesToState = (e) => {
    let element = e.target.value;
    let empty = [];
    empty.push(element);
    this.setState({ cuisines: empty });
  };

  pushIngredientsToState = (e) => {
    let element = e.target.value;
    let empty = [];
    empty.push(element);
    this.setState({ ingredients: empty });
  };

  pushInstructionsToState = (e) => {
    let element = e.target.value;
    let empty = [];
    empty.push(element);
    this.setState({ instructions: empty });
  };

  render() {
    return (
      <Container>
        <Typography style={{color:'secondary', display:'flex', flexDirection:'column'}}>
          <div>Create your new recipe below</div>
          <TextField
            type="text"
            variant="outlined"
            placeholder="Recipe Name"
            onChange={this.pushTitleToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Summary"
            onChange={this.pushSummaryToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Style"
            onChange={this.pushCuisinesToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Ingredients"
            onChange={this.pushIngredientsToState}
          />
          <TextField
            variant="outlined"
            type="text"
            placeholder="Instructions"
            onChange={this.pushInstructionsToState}
          />
        </Typography>
        <Button 
        color="primary"
        variant='outlined' 
        type="submit" 
        onClick={this.postInput}>
          Submit
        </Button>
      </Container>
    );
  }
}

export default CreateRecipe;
