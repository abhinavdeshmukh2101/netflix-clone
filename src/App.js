import Row from "./components/Row";
import requests from "./requests";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        isLarge={false}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLarge={false}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        isLarge={false}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        isLarge={false}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        isLarge={false}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        isLarge={false}
      />
      {/* <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLarge={false}
      /> */}
    </div>
  );
}

export default App;
