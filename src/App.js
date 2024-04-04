import { Container } from "react-bootstrap";
import NavBar from "./Components/partital/NavBar";
import MoviesList from "./Components/MoviesList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MoviesDetails from "./Components/MoviesDetails";

function App() {
  return (
    <div div className="font  color-body">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
