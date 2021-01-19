import {Component} from 'react';

class Counter extends Component {

    constructor(){
        super();

        this.state = {
            counter: 0,
            enable:false,
            textContent:"Nothing",
            items: ["apple" , "orange", "grapes", "pineapple"]
        };

    }

    increment = () => {

        setTimeout( ()=> {
            this.setState( (prev, props) => ({counter:prev.counter+1}));
        }, 1000)


        
    }

    incrementByClick = ()=>{

        this.setState( (prev,props)=>({ counter: prev.counter + 1}) );

    }

    checkClicked = ()=>{
        this.setState( (prev, props)=>({enable: !prev.enable}) );
    }

    textChanged  = (e)=>{

        this.setState( {textContent: e.target.value})
    }

    render(){

       // this.increment();

    //    let lis = this.state.items.map((item, index)=>{

    //     return <li>{item}</li>
    //    });
    // an use {lis} inside <ul> </ul>

        return(
            <div>
                This is a counter application

               
                <br />
                <button onClick={this.incrementByClick}> Click me </button>

                <p> you have clicked this many times {this.state.counter} </p>

<label>
    Enable 
    <input type="checkbox" onClick={this.checkClicked}/>
</label>

<p>Checkbox is {this.state.enable ? "enabled" : "disabled"}</p>

<input onChange={this.textChanged} type="text" />

<br />

<p>The entered text is {this.state.textContent}</p>

<ul>
{ this.state.items.map((item, index)=>{

return <li>{item}</li>
} ) }
</ul>

            </div>
        )
    }
    
}

export default Counter;