import React, {Component} from 'react';
import axios from 'axios'

export default class  Update extends Component {
    constructor(props){
        super(props)

        this.state ={
            title: '',
            summary: '',
            cuisines: [],
            ingredients: [],
            instructions: [],
        }
    }

    updateRecipe = (e) => {
        e.preventDefault();

        const recipe = {
            title: this.state.title,
            summary: this.state.summary,
            cuisines: this.state.cuisines,
            ingredients: this.state.ingredients,
            instructions: this.state.instructions
        }

        axios.put(`https://bombrecipeapi.herokuapp.com/recipe/${this.state.title}`, recipe)
            .then(res => {
                console.log(res)
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
        return(<div>
            <input type='text' placeholder = "title" onChange={this.pushTitleToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushSummaryToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushCuisinesToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushIngredientsToState}/>
            <input type='text' placeholder = "summary" onChange={this.pushInstructionsToState}/>
            <button type='submit' onClick={this.updateRecipe}>Submit</button>
        </div>)
    }

}