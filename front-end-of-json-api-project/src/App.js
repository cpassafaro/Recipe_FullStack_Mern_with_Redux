import React, {Component} from 'react';
import axios from 'axios';
import CreateRecipe from './CreateRecipe';
import Header from './Header';
import DeleteRecipe from './DeleteRecipe';
import Update from './Update';
import Home from './Home';
import "./App.css";

import {Route, Link, Redirect} from 'react-router-dom';


const API_KEY = "c40a9f3979dc415c9bedb13f41fb1449"

class App extends Component {
constructor(){
  super()

  this.state = {
    data: '',
  }
}
componentDidMount(){
  console.log('mounted')
  let url = "https://bombrecipeapi.herokuapp.com/"
   axios.get(url, {headers:{'X-RapidAPI-Key': API_KEY}})
    .then(res => {
      return res
    })
    .then(recipes => {
      console.log(recipes)
      this.setState({data: recipes})
    })
}



render(){
  console.log(this.state.data)
  return(<div>
    <nav>
      <Link exact to='/'></Link>
      <Link to='/new'></Link>
      <Link to='/delete'></Link>
      <Link to='/update'></Link>
    </nav>
    <main>
      <Header/>
      <Route exact path='/' component = {Home} />
      {/* Route to make a new element, component will pass down props automatically */}
      <Route path = '/new' component={CreateRecipe}/>
      <Route path = '/delete' render = {(routerProps) => {
          return <DeleteRecipe {...routerProps} data={this.state.data}/>
      }}/>
      <Route path = '/update' render = {(routerProps) => {
          return <Update {...routerProps} data={this.state.data}/>
      }}/>
      
    </main>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
  </div>

  )
}


}

export default App;




