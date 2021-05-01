import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Packages from './components/Packages';
import OurCapabilities from './components/OurCapabilities';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Offers from './components/Offers'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

    <Navbar />

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/packages">
          <Packages/>
        </Route>
        <Route path="/ourcapabilities">
          <OurCapabilities/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/gallery">
          <Gallery/>
        </Route>
        <Route path="/careers">
          <Careers/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/offers">
          <Offers/>
        </Route>
      </Switch>

      <Footer />
      
      </BrowserRouter>
  
  );
}

export default App ;

