import React, { Component } from "react";
import axios from "axios";
import { Button, Typography, Container, TextField } from "@material-ui/core";


export default class Update extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      summary: "",
      cuisines: [],
      ingredients: [],
      instructions: [],
    };
  }

  updateRecipe = (e) => {
    e.preventDefault();

    const recipe = {
      title: this.state.title,
      summary: this.state.summary,
      cuisines: this.state.cuisines,
      ingredients: this.state.ingredients,
      instructions: this.state.instructions,
    };

    axios
      .put(
        `https://bombrecipeapi.herokuapp.com/recipe/${this.state.title}`,
        recipe
      )
      .then((res) => {
        console.log(res);
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
        <Typography style={{color:'secondary', display: 'flex', flexDirection:'column'}}>
          <TextField 
            type="text"
            placeholder="Recipe Name"
            variant="outlined"
            onChange={this.pushTitleToState}
          />
          <TextField
            type="text"
            placeholder="Summary"
            variant="outlined"
            onChange={this.pushSummaryToState}
          />
          <TextField
            type="text"
            placeholder="Style"
            variant="outlined"
            onChange={this.pushCuisinesToState}
          />
          <TextField
            type="text"
            variant="outlined"
            placeholder="Ingredients"
            onChange={this.pushIngredientsToState}
          />
          <TextField
            type="text"
            placeholder="Instructions"
            variant="outlined"
            onChange={this.pushInstructionsToState}
          />
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          type="submit"
          onClick={this.updateRecipe}
        >
          Submit
        </Button>
      </Container>
    );
  }
}
