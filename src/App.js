import { Container } from "react-bootstrap";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "./Components/MoviesList";

function App() {
  const [movies, setMovies] = useState([]);
  // TODO get all movies from Api
  const getAllMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=a5b028967ab8251416e6ad7347bbe6cf&language=ar"'
    );

    setMovies(res.data.results);
  };

  // search movies
  const searchInput = async (word) => {

    if(word===''){
      getAllMovies();


    }else{
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    );
    setMovies(res.data.results);}

  };

  useEffect(() => {
    getAllMovies();
    // console.log(movie);
  }, []);
  return (
    <div div className="font  color-body">
      <NavBar searchInput={searchInput}/>
      <Container>
        <MoviesList movies={movies} />
      </Container>
    </div>
  );
}

export default App;
