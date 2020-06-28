import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './actions'
import About from "./Components/About.js"
import Nav from "./Components/Nav.js"
import Shop from "./Components/Shop.js"
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const counter = useSelector(state => state.counterReducer)
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();
  return (
    <Router>

    <div className="App">
        <Nav></Nav>
        <Route path="/About" exact component={About}></Route>
        <Route path="/Shop" exact component={Shop}></Route>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <p>Secret Information</p> : ''}
    </div>
      </Router>

  );
}

export default App;
