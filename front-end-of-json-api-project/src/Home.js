import React, { Component } from "react";
import {
  Typography,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  CardActionArea,
  Grid,
} from "@material-ui/core/";
import Card from "./CardPage";



export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data.data,
      american: "",
      french: "",
      italian: "",
      spanish: "",
      thai: "",
      korean: "",
      indian: "",
      jewish: "",
      southern: "",
      african: "",
      cajun: "",
      chinese: "",
      caribbean: "",
      german: "",
      irish: "",
      japanese: '',
      mexican:"",
      middleEastern:'',
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: false });
    this.findAmerican();
  }

  findAmerican = () => {
    let arr = this.state.data;
    let holder = [];
    let french = [];
    let italian = [];
    let spanish = [];
    let thai = [];
    let korean = [];
    let indian = [];
    let jewish = [];
    let southern = [];
    let african = [];
    let cajun = [];
    let chinese = [];
    let caribbean = [];
    let german = [];
    let irish = [];
    let japanese =[];
    let mexican = [];
    let middleEastern = [];
    arr.map((item) => {
      if (item.cuisines.includes("American")) {
        holder.push(item);
      } else if (item.cuisines.includes("French")) {
        french.push(item);
      } else if (item.cuisines.includes("Italian")) {
        italian.push(item);
      } else if (item.cuisines.includes("Spanish")) {
        spanish.push(item);
      } else if (item.cuisines.includes("Thai")) {
        thai.push(item);
      } else if (item.cuisines.includes("Korean")) {
        korean.push(item);
      } else if (item.cuisines.includes("Indian")) {
        indian.push(item);
      } else if (item.cuisines.includes("Jewish")) {
        jewish.push(item);
      } else if (item.cuisines.includes("Southern")) {
        southern.push(item);
      } else if (item.cuisines.includes("African")) {
        african.push(item);
      } else if (item.cuisines.includes("Cajun")) {
        cajun.push(item);
      } else if (item.cuisines.includes("Chinese")) {
        chinese.push(item);
      } else if (item.cuisines.includes("Caribbean")) {
        caribbean.push(item);
      } else if (item.cuisines.includes("German")) {
        german.push(item);
      } else if (item.cuisines.includes("Irish")) {
        irish.push(item);
      }else if (item.cuisines.includes("Japanese")) {
        japanese.push(item);
      }else if (item.cuisines.includes("Mexican")) {
        mexican.push(item);
      }else if (item.cuisines.includes("Middle Eastern")) {
        middleEastern.push(item);
      }
      return (
        holder,
        french,
        italian,
        spanish,
        thai,
        korean,
        indian,
        jewish,
        southern,
        african,
        cajun,
        chinese,
        caribbean,
        german,
        irish,
        japanese,
        mexican,
        middleEastern
      );
    });
    // console.log(
    //   holder,
    //   french,
    //   italian,
    //   spanish,
    //   thai,
    //   korean,
    //   indian,
    //   jewish,
    //   southern,
    //   african,
    //   cajun,
    //   chinese,
    //   caribbean,
    //   german,
    //   japanese,
    //   mexican,
    //   middleEastern
    // );
    this.setState({
      american: holder,
      french: french,
      italian: italian,
      spanish: spanish,
      thai: thai,
      korean: korean,
      indian: indian,
      jewish: jewish,
      southern: southern,
      african: african,
      cajun: cajun,
      chinese: chinese,
      caribbean: caribbean,
      german: german,
      irish: irish,
      japanese: japanese,
      mexican:mexican,
      middleEastern:middleEastern
    });
  };

  render() {
    if (this.state.isLoading == true) {
      return <div className="App">Loading...</div>;
    } else {
      return (
        <Typography>
          <Grid container direction="row" justify="space-around">
            <Card title="American Cuisine" image={this.state.american[0].image} data={this.state.american}
            />
            <Card title="French Cuisine" image={this.state.french[0].image} data={this.state.french}/>
            <Card title="Italian Cuisine" image={this.state.italian[0].image} data={this.state.italian}/>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card title="Spanish Cuisine" image={this.state.spanish[0].image} data={this.state.spanish}/>
            <Card title="Thai Cuisine" image={this.state.thai[1].image} data={this.state.thai}/>
            <Card title="Korean Cuisine" image={this.state.korean[0].image} data={this.state.korean}/>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card title="Indian Cuisine" image={this.state.indian[0].image} data={this.state.indian}/>
            <Card title="Jewish Cuisine" image={this.state.jewish[0].image} data={this.state.jewish}/>
            <Card title="Southern Cuisine" image={this.state.southern[0].image} data={this.state.southern}/>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card title="African Cuisine" image={this.state.african[0].image} data={this.state.african}/>
            <Card title="Cajun Cuisine" image={this.state.cajun[0].image} data={this.state.cajun}/>
            <Card title="Chinese Cuisine" image={this.state.chinese[0].image} data={this.state.chinese}/>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card title="Caribbean Cuisine" image={this.state.caribbean[0].image} data={this.state.caribbean}/>
            <Card title="German Cuisine" image={this.state.german[0].image} data={this.state.german}/>
            <Card title="Irish Cuisine" image={this.state.irish[0].image} data={this.state.irish}/>
          </Grid>
          <Grid container direction="row" justify="space-around">
            <Card title="Japanese Cuisine" image={this.state.japanese[0].image} data={this.state.japanese}/>
            <Card title="Mexican Cuisine" image={this.state.mexican[0].image} data={this.state.mexican}/>
            <Card title="Mid-Eastern Cuisine" image={this.state.middleEastern[0].image} data={this.state.middleEastern}/>
          </Grid>
        </Typography>
      );
    }
  }
}
