import React, { Component } from "react";
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
    // this.getIngredient()
    this.createElements();
    // this.createAddedElements();
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
        let thing2 = <div>{item.ingredients[0]}</div>;
        console.log(thing2)
        ingredients.push(thing2);
        return ingredients;
      }
      console.log(ingredients);
      // console.log(item.instructions.length)

      // if(item.instructions == String){
      //     console.log(item)
      //     let thing = <div>{item.instructions}</div>
      //     steps.push(thing)
      //     return steps
      // }

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
        let thing = <div>{item.instructions}</div>;
        steps.push(thing);
        return steps;
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
        </div>
      );
      emptyArr.push(element1);
      console.log(emptyArr);
    });
    this.setState({ elements: emptyArr });
  };

//   createAddedElements = () => {
//     let dataInterior = this.state.data;
//     let emptyArr = [];
//     dataInterior.forEach((item) => {
//       //gets the ingredients out of their arrays for this
//       console.log(item);
//       let instructions = item.instructions[0].steps;
//       if (instructions.length > 1) {
//           console.log(item)
//       } else {
//         let element1 = (
//           <div className={`container`}>
//             <div className="title">{item.title}</div>
//             <div className="img-area">
//               <img src={item.image} className="image" maxWidth="200px" />
//               <div className="ingredients-area">
//                 <div>Number of Servings: {item.servings}</div>
//                 <div>Ingredients: {item.ingredients}</div>
//               </div>
//             </div>
//             <div className="information">
//               <div className="steps-title">---Steps---</div>
//               <div>{item.instructions}</div>
//             </div>
//           </div>
//         );

//         emptyArr.push(element1);
//         console.log(emptyArr);
//       }
//     });
//     this.setState({ newElements: emptyArr });
//   };

  render() {
    console.log(this.state.data);
    console.log(this.state.elements);
    return <div>{this.state.elements}</div>;
  }
}

export default RecipeTile;
