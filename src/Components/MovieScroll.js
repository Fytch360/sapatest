import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import Results from './Results'
import Popup from './Popup';

function MovieScroll() { 
  const [state, setState] = useState({
    s: "Superman",
    results: [],
    selected: {}
  });
  const apiurl = 'http://www.omdbapi.com/?apikey=3e7958a5';

  const makeSearchRequest = useCallback(
    (searchString) =>
      axios(apiurl + "&s=" + searchString)
      .then(({ data}) => data.Search)
      .then(results => setState(prevState => ({ ...prevState, results }),
    [setState]
  )))

  useEffect(() => makeSearchRequest(state.s), []);

  const handleInput = useCallback(
    (e) => setState(prevState => ({ ...prevState, s: e.target.value }),
    []
  ))

  const search = useCallback((e) => {
    if (e.key === "Enter"){
      makeSearchRequest(state.s);
    }
  }, [makeSearchRequest, state.s])


  const openPopup = id => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result}
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return {...prevState, selected: {}}
    });
  }

    return(
        <div>
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.Title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false }
        </div>
)
}


export default MovieScroll