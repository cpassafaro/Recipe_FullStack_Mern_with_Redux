import React, { Component } from "react";
import axios from "axios";
import CreateRecipe from "./CreateRecipe";
import Header from "./Header";
import Update from "./Update";
import Home from "./Home";
import RecipeTile from './RecipeTile';
import Success from './status/Success';
import Fail from './status/Fail';
import "./App.css";
import { CircularProgress } from "@material-ui/core/";
import { Route, Link} from "react-router-dom";
let urlRoot = window.location.host.includes('localhost') ? "" : "/front_end_of_json_api_project" 

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
    } else {
      return (
        <div>
          <nav>
            <Link exact to={urlRoot + "/"}></Link>
            <Link to={urlRoot + "/new"}></Link>
            <Link to={urlRoot + "/delete"}></Link>
            <Link to={urlRoot + "/update"}></Link>
          </nav>
          <main>
            <Header />
            {/* <Home data={this.state.data}/> */}
            <Route
              exact
              path={urlRoot + "/"}
              render={(routerProps) => {
                return <Home {...routerProps} data={this.state.data} />;
              }}
            />
            {/* Route to make a new element, component will pass down props automatically */}
            <Route path={urlRoot + "/new"} component={CreateRecipe} />
            <Route
              path={urlRoot + "/update"}
              render={(routerProps) => {
                return <Update {...routerProps} />;
              }}
            />
            <Route
              path={urlRoot + "/recipe/:title"} component={RecipeTile}/>
              <Route path={urlRoot + "/success"} component={Success}/>
              <Route path={urlRoot + "/fail"} component={Fail}/>
          </main>
        </div>
      );
    }
  }
}

export default App;
