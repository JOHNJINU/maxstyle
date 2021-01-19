import {Component} from 'react';

class Welcome extends Component{

    // if we define constructor by ourselves we have to call constructor of parent by ourselves
    // using super
    // if we use a class variable we have to use this keyword

    constructor(props){

        super(props);
    }

    render(){

        return(
            <div>
                <p>This is a class component { this.props.name}</p>
            </div>
        )
    }

}


export default Welcome;