import "./App.css";
import React from "react";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignOutPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import Header from "./components/header.component/header.component";
import {auth} from "./firebase/firebase.util"

import { Route, Switch } from "react-router-dom";

class  App extends React.Component {
 constructor() {
  super();
  this.state = {
    currentUser: null
  }
 } 

 unsubscribeFromAuth = null

 componentDidMount(){
     auth.onAuthStateChanged(user => {
     this.setState({currentUser: user});
   });
 }

 componentWillUnmount(){
   this.unsubscribeFromAuth();
 }

 render() {
  return (
    <div className="App">
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignOutPage} />
      </Switch>
    </div>
  );
 }
}

export default App;
