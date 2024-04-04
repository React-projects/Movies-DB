import { Container } from "react-bootstrap";
import NavBar from "./Components/partital/NavBar";
import axios from "axios";
import { useState } from "react";
import MoviesList from "./Components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from "./Components/MoviesDetails";

function App() {
  const [pageCount, setPageCount] = useState(0);

  // TODO get pages movies
  const getPage = async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=a5b028967ab8251416e6ad7347bbe6cf&language=ar&page=${page}`
    );
    // setMovies(res.data.results);
    setPageCount(res.data.total_pages);
  };

  return (
    <div div className="font  color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<MoviesList getPage={getPage} pageCount={pageCount} />}
            />
            <Route path="/movie/:id" element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
