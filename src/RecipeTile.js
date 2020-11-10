import React, {Component} from 'react';
import './RecipeTile.css'



class RecipeTile extends Component{
    constructor(props){
        super(props)
        //this is how you retrieve props passed through links
        console.log(props.location.state)
        this.state ={
            data: props.location.state.data,
            elements:[]
        }
    }
    componentDidMount(){
        // this.getIngredient()
        this.createElements()
    }
    createElements = () => {
        let dataInterior = this.state.data
        let emptyArr=[];
        dataInterior.forEach(item => {
            //gets the ingredients out of their arrays for this
            let ingredients =[]
            let instructions = item.instructions[0].steps;
            let steps =[]

            item.ingredients.forEach(element => {
                let thing = <div>{element.original}</div>
                ingredients.push(thing)
                return ingredients
            })
            //gets the instructions step by step
            instructions.forEach(element => {
                if(element != null){
                let thing = <div>{element.step}</div>
                steps.push(thing)
                return steps
                }
            })
            
            let element1 =(
                <div className ={`container`}>
                    <div className='title'>{item.title}</div>
                    <div className='img-area'>
                        <img src={item.image} className='image' maxWidth='200px'/>
                        <div className='ingredients-area'>
                            <div>Number of Servings: {item.servings}</div>
                            <div>Ingredients: {ingredients}</div>
                        </div>
                    </div>
                    <div className ='information'>
                        <div className='steps-title'>---Steps---</div>
                        <div>{steps}</div>
                    </div>
                </div>
            )
            emptyArr.push(element1)
        })
        this.setState({ elements: emptyArr })
    }


    render(){
        console.log(this.state.data)
        console.log(this.state.elements)
        return(<div>{this.state.elements}</div>
        )
    }
}


export default RecipeTile;
