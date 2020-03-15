import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function Comics(props) {
  const {id} = props;
  const [comicsList, setComicsList] = useState(null);
  useEffect(() => {
    const getComics = async () => {
      const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?apikey=3152aee2a2afb46f2b57764874da399f`;
      const data = await Axios.get(url);
      setComicsList(data.data.data.results);
    };
    getComics();
  }, []);
  return (
    <div className="comic-list">
      {comicsList ? comicsList.map((comic) => <Comic key={comic.id} titulo={comic.title} descripcion={comic.description} portada={comic.thumbnail.path} extension={comic.thumbnail.extension} paginas={comic.pageCount} />) : null}
    </div>
  );
}

function Comic(props) {
  const { titulo, descripcion, portada, extension, paginas} = props;
  return (
    <div className="comic-items">
      <img id="comic-portada" src={`${portada}/portrait_incredible.${extension}`} alt="Portada del comic" />
      <h2>{titulo}</h2>
      <p>
        Descripcion:
        <br />
        {descripcion}
      </p>
      <p>
        Cantidad de páginas: {paginas}
      </p>
      <br />
    </div>
  );
}

export default Comics;
