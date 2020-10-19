import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SearchBar from './SearchBar'
import SearchResults from '../pages/SearchResults'
import ProductDetail from '../pages/ProductDetail'
import './App.scss';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <SearchBar />
      <Switch>
        <Route path="/items">   
          <SearchResults />
        </Route>
        <Route path="/details/:id">
          <ProductDetail />
        </Route>
      </Switch>
    </BrowserRouter> 
    </div>
  );
}

export default App;
