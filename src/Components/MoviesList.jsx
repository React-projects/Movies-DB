import { Row } from "react-bootstrap";
import CardMovies from "./CardMovies";
import PaginationComponent from "./partital/PaginationComponent";
const MoviesList = ({ movies }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovies key={mov.id} mov={mov} />;
        })
      ) : (
        <h3 className="text-center"> لا يوجد افلام ...............</h3>
      )}

      <PaginationComponent/>
    </Row>
  );
};

export default MoviesList;
