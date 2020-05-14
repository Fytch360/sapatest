import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


import Header from './Components/Header';
import Search from './Components/Search';
import Results from './Components/Results';
import Popup from './Components/Popup';
import { Container } from 'react-bootstrap';
import MovieScroll from './Components/MovieScroll';


function App() {
  const [state, setState] = useState({
    s: "Superman",
    results: [],
    selected: {}
  });



  const apiurl = "http://www.omdbapi.com/?apikey=3e7958a5";



  /*  <--- Функция поиска ---> */


  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiurl + "&s=" + state.s).then(({ data }) => {
        let results = data.Search;
        setState(prevState => {
          return { ...prevState, results: results }
        })
      });
    }
  }

  /*  <--- Управление запросом  ---> */
  const handleInput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s }
    });
  }


  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }



  return (
    <div className='basic'>
      <Header />
      <Search handleInput={handleInput} search={search} />
      
      <Container className='container'>
      <MovieScroll />
        <Results results={state.results} openPopup={openPopup} />

        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </Container>
    </div>
  );
}

export default App;
