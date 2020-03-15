import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

function Cards(props) {
  const { id, name, portrait, extension } = props;
  return (
    <div className="hero-card">
      <img src={`${portrait}/portrait_incredible.${extension}`} alt="Hero portrait" />
      <h2>{name}</h2>
      <Link to={`/detail/${id}`}>Ver más</Link>
    </div>
  );
}

export default Cards;
