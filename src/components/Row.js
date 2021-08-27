import React, { useState, useEffect } from "react";
import axios from "../axios";

import classes from "./Row.module.css";

// append the poster_path to this link.
const base_url = "https://image.tmdb.org/t/p/original";

const Row = (props) => {
  const [movies, setMovies] = useState([]); // value vanishess when we refresh the page.

  //snippet of code which runs based on specific condition
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [props.fetchUrl]);

  console.table(movies);

  return (
    <div className={classes.row}>
      <h2>{props.title}</h2>

      {props.isLarge ? (
        <div className={classes.row__posters}>
          {movies.map((movie) => (
            <img
              className={classes.row__poster_large}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
      ) : (
        <div className={classes.row__posters}>
          {movies.map((movie) => (
            <img
              className={classes.row__poster}
              src={`${base_url}${movie.poster_path}`}
              alt={movie.title}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Row;
