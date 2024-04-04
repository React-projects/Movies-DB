import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getPagesMovies } from "../../redux/actions/movieActions";

function PaginationComponent() {
  const [pageCount, setPageCount] = useState(0);
  const dispatch = useDispatch();
  const pageNumbers = useSelector((state) => state.pageCount);
  useEffect(() => {
    setPageCount(pageNumbers);
  }, []);


 
  const handlePageClick = (data) => {
    dispatch(getPagesMovies(data.selected + 1));
  };


  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="التالي"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="السابقه"
        renderOnZeroPageCount={null}
        containerClassName={"pagination justify-content-center p-3"}
        nextClassName={"page-item"}
        previousClassName={"page-item"}
        pageLinkClassName={"page-link"}
        nextLinkClassName={"page-link"}
        previousLinkClassName={"page-link"}
        activeClassName={"active"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
      />
    </div>
  );
}

export default PaginationComponent;
