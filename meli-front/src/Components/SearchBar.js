import React  from 'react';
import { useHistory } from "react-router-dom";
import Logo from '../assets/Logo_ML.png'
import icon_search from '../assets/ic_Search.png'
import './SearchBar.scss'

const SearchBar = () =>{  

  const [data, setData] = React.useState({
    search:''
  });
  let history = useHistory();
  
  
  const redirect = (e) => {    
    e.preventDefault()
    setData({
      search: e.target.search.value
    });
    
    history.push({
      pathname: '/items',
      search: `?search=${e.target.search.value}`
    });
  
  }   
  return (
        <header>
          <div className="logo__container">
            <img src={Logo} className="logo" alt="logo"/>
          </div>
          <form action=""  onSubmit={redirect} className="form">
            <input type="text"className="form__input" placeholder="Nunca dejes de buscar"  name="search" defaultValue={data.search}/>
            <button><img src={icon_search} alt="search-icon"/></button>
          </form>
        </header>
    )
}

export default SearchBar 