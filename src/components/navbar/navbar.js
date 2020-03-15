import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom';

function Navbar(props) {
  const { handleSubmit, handleInput } = props;
  return (
    <nav>
      <Link to="/">
        <img src={require('./image/marvel-logo.png')} alt="Marvel logo" />
      </Link>
      <form method="GET" onSubmit={handleSubmit}>
        <input placeholder="Buscar" onChange={handleInput} />
      </form>
    </nav>
  );
}

export default Navbar;
