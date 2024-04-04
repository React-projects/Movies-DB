import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";
import PaginationComponent from "./partital/PaginationComponent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { allDataMovies } from "../redux/actions/movieActions";
const MoviesList = ({ getPage, pageCount }) => {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();
  const dataMovies = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(allDataMovies());
  }, []);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h3 className="text-center"> لا يوجد افلام ...............</h3>
      )}
      {movies.length >= 1 ? <PaginationComponent /> : null}
    </Row>
  );
};

export default MoviesList;
