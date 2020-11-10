import React, { Component } from "react";
import axios from "axios";
import CreateRecipe from "./CreateRecipe";
import Header from "./Header";
import DeleteRecipe from "./DeleteRecipe";
import Update from "./Update";
import Home from "./Home";
import RecipeTile from './RecipeTile';
import Success from './status/Success';
import Fail from './status/Fail';
import "./App.css";
import { CircularProgress } from "@material-ui/core/";
import { Route, Link, Redirect } from "react-router-dom";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: "",
      isLoading: true,
    };
  }
  componentDidMount() {
    console.log("mounted");
    let url = "https://bombrecipeapi.herokuapp.com/";
    axios
      .get(url)
      .then((res) => {
        return res;
      })
      .then((recipes) => {
        this.setState({ data: recipes, isLoading: false });
      });
  }

  render() {
    if (this.state.isLoading == true) {
      return (
        <CircularProgress
          color="secondary"
          display="flex"
          justify="center"
          alignItems="center"
        />
      );
      // <div className="App">Loading...</div>;
    } else {
      return (
        <div>
          <nav>
            <Link exact to="/"></Link>
            <Link to="/new"></Link>
            <Link to="/delete"></Link>
            <Link to="/update"></Link>
          </nav>
          <main>
            <Header />
            {/* <Home data={this.state.data}/> */}
            <Route
              exact
              path="/"
              render={(routerProps) => {
                return <Home {...routerProps} data={this.state.data} />;
              }}
            />
            {/* Route to make a new element, component will pass down props automatically */}
            <Route path="/new" component={CreateRecipe} />
            <Route
              path="/delete"
              render={(routerProps) => {
                return <DeleteRecipe {...routerProps} data={this.state.data} />;
              }}
            />
            <Route
              path="/update"
              render={(routerProps) => {
                return <Update {...routerProps} data={this.state.data} />;
              }}
            />
            <Route
              path="/recipe/:title" component={RecipeTile}/>
              <Route
              path="/success" component={Success}/>
              <Route path="/fail" component={Fail}/>
          </main>
        </div>
      );
    }
  }
}

export default App;
