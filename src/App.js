import React from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvide";
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    //this function will keep track of the logged in and logged out users
    auth.onAuthStateChanged((authUser) => {
      console.log("Our User is -->",authUser);
      if (authUser) {
        //This will shoot the user id in the Data Layer
        dispatch({
          //Will work when user is logged in
          type:'SET_USER',
          user:authUser
        })
      }
      else
       {
         //will work when user is logged out
         dispatch({
           type:'SET_USER',
           user:null  //As the user will logout this will became null
         })
       }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          {/*Login Page*/}
          <Route path="/login">
            <Login />
          </Route>
          {/* Checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Homepage Route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
