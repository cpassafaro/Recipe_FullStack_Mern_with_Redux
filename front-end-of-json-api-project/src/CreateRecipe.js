import React, {Component} from 'react';
import Header from './Header';

import axios from 'axios';





class CreateRecipe extends Component {
    constructor(){
        super()

        this.state = {
            title: '',
            summary: '',
            cuisines: [],
            ingredients: [],
            instructions: [],
        }
    }
    // app.post("/new", recipeController.create);

    postInput = event => {
        event.preventDefault();

        const recipe = {
            title: this.state.title,
            summary: this.state.summary,
            cuisines: this.state.cuisines,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
        }
        axios.post(`https://bombrecipeapi.herokuapp.com/new`, recipe)
            .then(res => {
                console.log(res);
                console.log(res.data)
            })
    }



    pushTitleToState = (e) => {
        let element = e.target.value
        // console.log(element)
        this.setState({title: element})
    }

    pushSummaryToState = (e) => {
        let element = e.target.value
        // console.log(element)
        this.setState({summary: element})
    }
    
    pushCuisinesToState = (e) => {
        let element = e.target.value
        let empty = [];
        empty.push(element)
        this.setState({cuisines: empty})
    }

    pushIngredientsToState = (e) => {
        let element = e.target.value
        let empty = [];
        empty.push(element)
        this.setState({ingredients: empty})
    }

    pushInstructionsToState = (e) => {
        let element = e.target.value
        let empty = [];
        empty.push(element)
        this.setState({instructions: empty})
    }


    render(){
        console.log(this.state.title)
        console.log(this.state.summary)
        console.log(this.state.cuisines)
        console.log(this.state.ingredients)
        console.log(this.state.instructions)
        return(<div>
            <input type='text' placeholder = "title" onChange={this.pushTitleToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushSummaryToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushCuisinesToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushIngredientsToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushInstructionsToState}/>
            <button type='submit' onClick={this.postInput}>Submit</button>
        </div>
        )
    }
}

export default CreateRecipe

