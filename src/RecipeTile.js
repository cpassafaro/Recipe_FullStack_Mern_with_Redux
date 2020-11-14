import React, { Component } from "react";
import axios from 'axios';
import { Route, Link, Redirect } from "react-router-dom";
import "./RecipeTile.css";

class RecipeTile extends Component {
  constructor(props) {
    super(props);
    //this is how you retrieve props passed through links
    console.log(props.location.state);
    this.state = {
      data: props.location.state.data,
      elements: [],
      newElements: [],
    };
  }
  componentDidMount() {
    this.createElements();
  }
  createElements = () => {
    let dataInterior = this.state.data;
    console.log(dataInterior)
    let emptyArr = [];
    dataInterior.forEach((item) => {
      //gets the ingredients out of their arrays for this
      // console.log(item.instructions.length)
      let ingredients = [];
      // let newInstructions = item.instructions;
      let instructions = item.instructions[0].steps;
      let steps = [];
      if (item.ingredients.length > 0) {
        item.ingredients.forEach((element) => {
          let thing = <div>{element.original}</div>;
          ingredients.push(thing);
          return ingredients;
        });
      } else {
        console.log(item);
      }

      // //gets the instructions step by step
      if (instructions.length > 0) {
        console.log(item);
        instructions.forEach((element) => {
          if (element != null) {
            let thing = <div>{element.step}</div>;
            steps.push(thing);
            return steps;
          }
        });
      } else {
        console.log(item);
      }

      console.log(item);

      let element1 = (
        <div className={`container`}>
          <div className="title">{item.title}</div>
          <div className="img-area">
            <img src={item.image} className="image" maxWidth="200px" />
            <div className="ingredients-area">
              <div>Number of Servings: {item.servings}</div>
              <div>Ingredients: {ingredients}</div>
            </div>
          </div>
          <div className="information">
            <div className="steps-title">---Steps---</div>
            <div>{steps}</div>
          </div>
          <button className='delete button' onClick={this.deleteElement}>Delete Recipe</button>
        </div>
      );
      emptyArr.push(element1);
      console.log(emptyArr);
    });
    this.setState({ elements: emptyArr });
  };

  deleteElement = (e) => {
    let title = e.target.parentElement.firstElementChild.textContent

    axios
    .delete(`https://bombrecipeapi.herokuapp.com/remove/${title}`)
    .then((res) => {
      //could do it by status because even if title doesn't exist but api call is good it would show success
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
  }



  render() {
    console.log(this.state.data);
    console.log(this.state.elements);
    return <div>{this.state.elements}</div>;
  }
}

export default RecipeTile;
