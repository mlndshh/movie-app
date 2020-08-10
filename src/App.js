import React from 'react';
import {Button, Container, Card} from 'react-bootstrap';
import movies from './data/movies.json';
import Search from './components/Search/Search';
import Display from './components/Display/Display';
import './App.scss';

const App = () => {
  const [results, setResults] = React.useState([]);
  const [movie, setMovie] = React.useState(null);
  const [isMovie, setIsMovie] = React.useState(false);
  const [movieBackground, setMovieBackground] = React.useState("");
  const search = (searchTerm) => {
    if(searchTerm!==null) {
      searchTerm = searchTerm.toLowerCase();
      var searchResults = movies.filter(item=>item.title.toLowerCase().includes(searchTerm));
      setResults(searchResults);
    }
  };

  const selectResult = (movie) => {
    setIsMovie(true);
    setMovie(movie);
    setMovieBackground(`url(../../bg-images/${movie.id}.jpg)`);
    document.body.style.backgroundImage= `url(../../bg-images/${movie.id}.jpg)`;
  };

  React.useEffect(() => {
    if(isMovie) {
      document.getElementById("display").style.visibility = "visible";
    document.body.style.backgroundImage = `url(../../bg-images/${movie.id}.jpg)`;
    }
    else {
      document.getElementById("display").style.visibility = "hidden";
      document.body.style.backgroundImage = "none";
    }
  }, [isMovie])

  React.useEffect(() => {
    
  }, [isMovie])


  return(
    <>
    <Container>
    <div className="parentDiv">
        <div className="childDiv">
        <div className="searchDiv">
          <Search search={search} results={results} selectResult={selectResult}/>
        </div>
          {isMovie ?  <Display movie={movie} /> : <Display movie={movies[0]} />}
        </div>
      </div>
    </Container>
    </>
  );
}

export default App;
