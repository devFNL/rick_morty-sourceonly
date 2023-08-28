import React from "react";
import { Cards } from "./Cards";
import { getAllChars, getPages } from "../service/FetchService";

export const Main = () => {
  const [characters, setCharacters] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getAllChars();
        setCharacters(response.results);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    const fetchDataPage = async () => {
      try {
        const response = await getPages(currentPage);
        setCharacters(response.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataPage();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <main>
      <Cards characters={characters} />
      <div className="container d-flex align-items-center justify-content-center gap-5">
        <button
          type="button"
          className="btn btn-warning fs-4"
          onClick={prevPage}
        >
          Prev
        </button>
        <button
          type="button"
          className="btn btn-warning fs-4"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </main>
  );
};
