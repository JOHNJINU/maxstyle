import './App.css';
import {Footer} from './Home';
import Header from './components/Header';
import Contact from './Contact';
import Welcome from './Welcome';
import Counter from './Counter';
import TodoList from './TodoList';


function AppDummy() {

let age = 18;

  return (
    <div className="App">
      {greet("jinu")}
      <p>You are { age >= 18 ? "eligible " : " not eligible "} to vote</p>

      <Header />
      <Contact id="1" name="teacher"/> 
      <Contact id={2} name="student" />
      <Contact id={"2"} name="student" />
      <Welcome name="Classical" />
      <Counter />
      <TodoList />
      <Footer />
    </div>
  );
}

export default AppDummy;

