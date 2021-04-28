import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchJoke } from "../actions/jokeActions";


// If loading, display a loading message
// Otherwise, render the joke
const Joke = (props) => {

  useEffect(() => {
    // Fetch a joke when the component mounts (useEffect with an empty dependency array is like componentDidMount.)
    props.fetchJoke();
  }, [props.fetchJoke]);

  if (props.loading) {
    return (
      <>
        <p>Fetching another hilarious programmer joke...</p>
      </>
    )
  }
  return (
    <>
      <h3>{props.joke.setup}</h3>
      <h2>{props.joke.punchline}</h2>
      <button onClick={() => props.fetchJoke()}>Fetch programmer joke</button>
    </>
  )
}

// Step 3: connect components to Redux

const mapStateToProps = (state) => {
  return {
    joke: state.joke,
    loading: state.loading
  }
};

const mapDispatchToProps = {fetchJoke}

export default connect(mapStateToProps, mapDispatchToProps)(Joke);