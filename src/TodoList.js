import {Component} from 'react';

class TodoList extends Component{


    constructor(){
        super();

        this.state = {

            todos : ["item 1", "item 2"],
            toDoTypedItem : ""
        }
    }

    toDoTextChange = (e)=>{

       this.toDoTypedItem = e.target.value;
       console.log(this.toDoTypedItem);
    }

    addToDo = ()=>{

        let arrayOfTodos = this.state.todos;
        arrayOfTodos.push(this.toDoTypedItem);

       // this.setState( ()=> ({  }));

        // what i saw here is if i change data in araay then 
        //i think render is called again
        // it shows updated array value
        // but if comment this.setState( ()=> ({  })); screen wont show update value
        // so i think whenever we call this.setState it renders
        // since we have added value to array it  shows updated array
        
        console.log(this.state.todos);
    }

    render(){

        return(

            <div>
                <h3>To do List</h3>

                <input onChange={this.toDoTextChange} type="text" />
                <button onClick={this.addToDo}>Add Todo </button>

                <ul>
                    {this.state.todos.map( (itm, index)=>{
                        return <li> {itm} </li>
                    } )}
                </ul>
            </div>

        )
    }


}

export default TodoList;