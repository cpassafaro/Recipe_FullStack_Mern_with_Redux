import React, {Component} from 'react';
import Header from './Header';
import './App.css';
import './Header.css'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            data: this.props.data,
        }
    }

    componentDidMount(){

    }

    render(){
        return(<div>
            <div class='container'>
                <div></div>
            </div>
        </div>

        )
    }


}

export default Home;