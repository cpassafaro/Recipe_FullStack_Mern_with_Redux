import React, { Component } from "react";
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
      ingredients: {
        aisle: "Produce",
        amount: 1,
        consistency: "solid",
        id: 9037,
        image: "avocado.jpg",
        measures: {},
        meta: [],
        metaInformation: [],
        name: "avocado",
        original: this.state.ingredients,
        originalName: "large avocado",
        originalString: "1 medium/large avocado",
        unit: "medium"
        },
      instructions: {
        name: '',
        steps: [{
          number:1,
          step:[this.state.instructions]
        }]
      },
    };
    axios
      .post(`https://bombrecipeapi.herokuapp.com/new`, recipe)
      .then((res) => {
        if(res.data != null){
          console.log(this.props.history)
          this.props.history.push('/success')
          window.location.reload(false)
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
