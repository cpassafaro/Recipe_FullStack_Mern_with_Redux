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
    }
  }

    axios
      .put(
        `https://bombrecipeapi.herokuapp.com/recipe/${this.state.title}`,
        recipe
      )
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
        <Typography style={{color:'secondary', display: 'flex', flexDirection:'column'}}>
          <div>Place the name of the recipe you would like to change below in 'Recipe Name' box and then make changes below.</div>
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
