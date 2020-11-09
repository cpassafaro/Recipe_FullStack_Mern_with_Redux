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
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
            crossorigin="anonymous"
          ></link>
        </div>
      );
    }
  }
}

export default App;
