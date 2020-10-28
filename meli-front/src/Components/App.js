import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import Home from '../pages/Home/Home';
import SearchResults from '../pages/SearchResults/SearchResults';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import '../styles/common.scss';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <SearchBar />

        <Switch>
          <Route path="/items">   
            <SearchResults />
          </Route>

          <Route path="/details/:id">
            <ProductDetail />
          </Route>

          <Route path="/">   
            <Home />
          </Route>
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
