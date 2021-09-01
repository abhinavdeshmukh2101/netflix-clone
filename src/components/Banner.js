import React, { useEffect, useState } from "react";
import requests from "../requests";
import axios from "../axios";

import classes from "./Banner.module.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results[Math.floor(Math.random()*request.data.results.length - 1)]);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className={classes.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className={classes.contents}>
        <h1 className={classes.title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={classes.buttons}>
          <button className={classes.button}>Play</button>
          <button className={classes.button}>My List</button>
        </div>

        <div className={classes.description}>
          {truncate(movie?.overview, 150)}
        </div>

        {/* <div className={classes.fadeOutEffect}></div> */}
      </div>
    </header>
  );
}

export default Banner;
