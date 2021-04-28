import axios from "axios";

export const FETCHING_START = "FETCHING_START";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS"
export const FETCHING_FAILURE = "FETCHING_FAILURE"

// API calls and other asynchronous "thunky stuff" happens here in asynchronous actions, not in the reducer.

// When looking over an actions file, the ones with the weird double-nested structure are thunk "asynchronous actions", while the other normal ones are standard (synchronous) action creators.

export const fetchJoke = (dispatch) => {
  // start a fetch (dispatch FETCHING_START)
  dispatch({ type: FETCHING_START });
  axios.get("https://official-joke-api.appspot.com/jokes/programming/random")
    // if happy path, dispatch the happy action
    .then((res => {
      console.log("API joke data:", res.data[0]);
      dispatch({ type: FETCHING_SUCCESS, payload: res.data[0]})
    }))
    // if sad path, dispatch the sad ation
    .catch(err => {
      console.log(err);
      dispatch({type: FETCHING_FAILURE, payload: err})
    });
}