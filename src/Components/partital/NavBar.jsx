import { Container, Col, Row } from "react-bootstrap";
import logo from "../../images/logo.png";
import { useDispatch } from "react-redux";
import {
  allDataMovies,
  getSearchMovies,
} from "../../redux/actions/movieActions";
const NavBar = () => {
  const dispatch = useDispatch();
  const resultSearch = (word) => {
    searchInput(word);
  };

  const searchInput = async (word) => {
    if (word === "") {
      dispatch(allDataMovies());
    } else {
      dispatch(getSearchMovies(word));
    }
  };

  return (
    <div className="nav-style w-100">
      <Container>
        <Row className="pt-2 ">
          <Col xs="2" lg="1">
            <a href="/">
              <img className="logo" src={logo} alt="Logo" />
            </a>
          </Col>
          <Col xs="10" lg="11" className=" d-flex align-items-center">
            <div className="search  w-100">
              <i className="fa fa-search"></i>
              <input
                onChange={(e) => resultSearch(e.target.value)}
                type="text"
                className="form-control"
                placeholder="ابحث"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
