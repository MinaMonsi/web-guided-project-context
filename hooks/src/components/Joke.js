import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchJoke } from "../actions/jokeActions";

// If loading, display a loading message
// Otherwise, render the joke
const Joke = (props) => {
  const dispatch = useDispatch(); // React Redux knows which store to use, because by definition a store is the single source of truth. Only one store can be provided to a component tree

  const {joke, loading} = useSelector((state) => state)

  useEffect(() => {
    // Fetch a joke when the component mounts (useEffect with an empty dependency array is like componentDidMount.)
    fetchJoke(dispatch);
  }, [fetchJoke]);

  if (loading) {
    return (
      <>
        <p>Fetching another hilarious programmer joke...</p>
      </>
    )
  }
  return (
    <>
      <h3>{joke.setup}</h3>
      <h2>{joke.punchline}</h2>
      <button onClick={() => fetchJoke(dispatch)}>Fetch programmer joke</button>
    </>
  )
}

export default Joke;