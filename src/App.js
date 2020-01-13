import React, { Component,Fragment } from 'react';
import { BrowserRouter, Route} from "react-router-dom"
import Home from './pages/Home/home';
import AboutMe from './pages/aboutMe/aboutMe'
import ContactMe from './pages/contactMe/contactMe'
import Navbar from './shared/navbar'
import './App.css';

// function Hello (props) {
//   return <div>hola mundo bienvenidos</div>
// }


class App extends Component{
  render(){
    return(   
     <BrowserRouter>
        <Fragment>
          <Navbar></Navbar>
          <Route exact path='/Home' component={Home}/>
          <Route exact path='/aboutMe' component={AboutMe}/>
          <Route exact path='/contactMe' component={ContactMe}/>
           
           {/* <Hello></Hello> */}
        </Fragment>
      </BrowserRouter>     
    
      )
  }
}


export default App;
