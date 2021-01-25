import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import { Route } from 'react-router-dom';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header/>
      <switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/shop' component={ShopPage}></Route>
      </switch>
    </div>
  );
}

export default App;
