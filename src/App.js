import { Container } from "react-bootstrap";
import CardMovie from "./Components/CardMovies";
import NavBar from "./Components/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const getAllMovies = async () => {
    const res = await axios.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=a5b028967ab8251416e6ad7347bbe6cf&language=ar"'
    );

    setMovie(res.data.results);
  };

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getAllMovies();
    console.log(movie);
  }, []);
  return (
    <>
      <NavBar />
      <Container>
        <CardMovie />
      </Container>
    </>
  );
}

export default App;
