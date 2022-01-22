import React from 'react';
import  {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from '../component/Home';
import Navbar from '../component/base/Mynav';
import Footer from '../component/base/Myfooter';
import Contact from '../component/Contact';
import Logic from '../component/Logic';

function Myroute() {
  return (
  <BrowserRouter>
  <Navbar />
  <Switch> 
      <Route exact path="/"component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/Logic" component={Logic}/>
  </Switch>
  <Footer />
  </BrowserRouter>
  );
}
export default Myroute;
