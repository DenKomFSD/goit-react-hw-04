import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./pictures-api";

import Loader from "../src/components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import LoadMore from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [pics, setPics] = useState([]);
  //add spinner
  const [isLoading, setIsLoading] = useState(false);
  //error tate
  const [error, setError] = useState(false);
  //saving current query
  const [query, setQuery] = useState("");
  // page state
  const [page, setPage] = useState(1);
  // useEffect(() => {
  //   async function getImages() {
  //     try {
  //       setIsLoading(true);
  //       const data = await fetchImages("cats");
  //       setPics(data.results);
  //     } catch (error) {
  //       setError(true);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   getImages();
  // }, []);

  const handleSubmit = async (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setPics([]);

    // try {
    //   setIsLoading(true);
    //   const data = await fetchImages(query);
    //   setPics(data.results);
    // } catch (error) {
    //   setError(true);
    // } finally {
    //   setIsLoading(false);
    // }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    async function getImages() {
      try {
        if (!query) return;
        setIsLoading(true);
        const data = await fetchImages(query, page);
        setPics((prevPics) => {
          return [...prevPics, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [query, page]);

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && (
        <ErrorMessage
          message={"Failed to load images. Please try again later."}
        />
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      {pics.length > 0 && <ImageGallery pics={pics} />}
      {pics.length > 0 && <LoadMore onClick={handleLoadMore} />}

      <Toaster position="top-right" />
    </>
  );
}

export default App;
