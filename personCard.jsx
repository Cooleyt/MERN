import React, {Component} from 'react';

class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            age: this.props.age
        };
    }

    increment =() =>{
        let birthday = this.state.age;
        birthday ++;
        this.setState({age:birthday}) 
    }
    

    render(){
        return(
            <div>
                <h1>{this.props.firstName},{this.props.lastName}</h1>
                <h5>Age:{this.state.age}</h5>
                <h5>Hair color:{this.props.hairColor}</h5>
                <button onClick ={this.increment}>Birthday button for {this.props.firstName}</button>
            </div>
        )
    }
}

export default Card;