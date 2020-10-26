import React  from 'react';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import './SearchBar.scss'

const SearchBar = () => {  
  const [data, setData] = React.useState({ search: '' });

  let history = useHistory();
  
  const redirect = (e) => {    
    e.preventDefault();
    setData({
      search: e.target.search.value
    });
    
    history.push({
      pathname: '/items',
      search: `?search=${e.target.search.value}`
    });
  }

  return (
    <header className="header">
      <Container>
        <Link to='/' className="header-logo"></Link>

        <form className="form" onSubmit={redirect}>
          <input
            className="form-input"
            placeholder="Nunca dejes de buscar"
            name="search"
            defaultValue={data.search}
          />
          <button className="form-button"></button>
        </form>
      </Container>
    </header>
  );
}

export default SearchBar;
