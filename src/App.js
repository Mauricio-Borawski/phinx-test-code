import React, { useState } from 'react';
import Axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Cards from './components/cards/cards';
import HeroDetail from './components/hero_info/hero-detail';
import './style/main.css';

function App() {
  const [fetch, setFetch] = useState(null);
  const [search, setSearch] = useState(null);
  const getData = async (heroName) => {
    try {
      const url = `https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${heroName}&limit=50&apikey=3152aee2a2afb46f2b57764874da399f`;
      const data = await Axios.get(url);
      setFetch(data.data.data.results);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err.message);
    }
  };
  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (search === '') {
      await setFetch(null);
    } else {
      await getData(search);
    }
  };
  return (
    <Router>
      <div className="App">
        <Navbar handleSubmit={handleSubmit} handleInput={handleInput} />
        <Switch>
          <Route path="/" exact>
            <div className="content">
              {fetch ? fetch.map((data) => <Cards key={data.id} id={data.id} name={data.name} portrait={data.thumbnail.path} extension={data.thumbnail.extension} />) : null}
            </div>
          </Route>
          <Route path="/detail/:id" component={HeroDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
