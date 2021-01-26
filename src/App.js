import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInSignUp from './pages/signinAndSignup/signinsignup';
import {auth, createUserProfileDocument} from './firebase/firebase'
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      createUserProfileDocument(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route path='/shop' component={ShopPage}></Route>
          <Route path='/signin' component={SignInSignUp}></Route>
        </switch>
      </div>
    );
  }
}

export default App;
