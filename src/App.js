import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Redirect, Route } from 'react-router-dom';
import Header from './components/header/header';
import SignInSignUp from './pages/signinAndSignup/signinsignup';
import {auth, createUserProfileDocument} from './firebase/firebase'
import { Component } from 'react';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/userActions';

class App extends Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      setCurrentUser(userAuth);
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
          <Route 
          exact
          path='/signin' 
          render={()=>
            this.props.currentUser ? (
            <Redirect to='/' />
            ) : (
            <SignInSignUp />
            )
          }/>
        </switch>
      </div>
    );
  }
}

const mapDispatchedToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchedToProps)(App);
