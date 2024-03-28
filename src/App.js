import { Container } from "react-bootstrap";
import NavBar from "./Components/partital/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import MoviesList from "./Components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from "./Components/MoviesDetails";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // TODO get all movies from Api
  const getAllMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=a5b028967ab8251416e6ad7347bbe6cf&language=ar"'
    );

    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  // TODO search movies
  const searchInput = async (word) => {
    if (word === "") {
      getAllMovies();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(res.data.results);
      setPageCount(res.data.total_pages);
    }
  };
  // TODO get pages movies
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  useEffect(() => {
    getAllMovies();
    // console.log(movie);
  }, []);
  return (
    <div div className="font  color-body">
      <NavBar searchInput={searchInput} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  getPage={getPage}
                  pageCount={pageCount}
                />
              }
            />
            <Route path="/movie/:id" element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
