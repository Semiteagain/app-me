import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Nav from './Nav'
import About from './About'
import Home from './Home'
import Contact from './Contact'
import Product from './Product'
import Services from './Services'
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends Component {
    
    render() { 
        return ( 
            <div>
                <BrowserRouter>
                <Nav />
                <Route  path='/' exact component={Home}      />
                <Route path='/about' component={About} />
                <Route path= '/product' component={Product} />
                <Route path='/services' component={Services}  />
                <Route path='/contact'  component={Contact} />                
                
                </BrowserRouter>

            </div>
         );
    }
}
 
export default App;