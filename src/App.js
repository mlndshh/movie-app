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


  return(
    <>
    <div >
    <Container fluid>
        <Search search={search} results={results} selectResult={selectResult}/>
        {isMovie && <Display movie={movie} />}
    </Container>
    </div>
    </>
  );
}

export default App;
