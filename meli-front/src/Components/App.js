import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SearchBar from './SearchBar/SearchBar';
import SearchResults from '../pages/SearchResults/SearchResults';
import ProductDetail from '../pages/ProductDetail/ProductDetail';
import '../styles/common.scss';

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
        </Switch>
      </BrowserRouter> 
    </div>
  );
}

export default App;
