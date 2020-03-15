import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Comics from '../comics/comics';
import './hero-detail.css';

function HeroDetail({match}) {
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const {id} = match.params;
    const getHeroDetail = async () => {
      try {
        const url = `https://gateway.marvel.com:443/v1/public/characters/${id}?apikey=3152aee2a2afb46f2b57764874da399f`;
        const data = await Axios.get(url);
        setDetail(data.data.data.results[0]);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log('Hay un error');
      }
    };
    getHeroDetail();
  }, []);
  return (
    <div className="hero-detail">
      {detail ? (
        <>
          <div className="hero-info">
            <div className="portada-hero">
              <img id="portada-hero" src={`${detail.thumbnail.path}.${detail.thumbnail.extension}`} alt="Poster del Heroe" />
            </div>
            <div className="hero-description">
              <h2>{detail.name}</h2>
              <p id="hero-descripcion">
                Descripción:
                <br />
                {detail.description}
              </p>
              <p>
                Cantidad de comics:
                {detail.comics.available}
              </p>
            </div>
          </div>
          <h2 id="section-change">Listado de comics</h2>
          <Comics id={detail.id} />
        </>
      )
        : null
      }
    </div>
  );
}

export default HeroDetail;
