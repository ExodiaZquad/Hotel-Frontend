import { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const ACTIONS = {
  API_REQUEST: "api-request",
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};

const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case ACTIONS.API_REQUEST:
      return { ...state, data: [], loading: true };
    case ACTIONS.FETCH_DATA:
      return { ...state, data: payload, loading: false };
    case ACTIONS.ERROR:
      return { ...state, data: [], error: payload };
    default:
      return state;
  }
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    dispatch({ type: ACTIONS.API_REQUEST });
    axios
      .get(url)
      .then((res) => {
        dispatch({ type: ACTIONS.FETCH_DATA, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: ACTIONS.ERROR, payload: err.error });
      });
  }, [url]);
  return state;
};

export default useFetch;

// TO USE
// import React from "react";
// import useFetch from "../../hooks/useFetch";
// import { Spinner } from "react-bootstrap";

// const Home = () => {
//   const BASE_URL = "https://jsonplaceholder.typicode.com/posts";
//   const { data, loading, error } = useFetch(BASE_URL);
//   return (
//     <div>
//       <h1>Home Page</h1>
//       {loading && <Spinner animation="border" variant="dark" />}
//       {error && <h3>Error</h3>}
//       {data && data.map((i) => <h1>{i.id}</h1>)}
//     </div>
//   );
// };

// export default Home;
