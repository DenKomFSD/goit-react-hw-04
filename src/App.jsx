import { useState } from "react";
import "./App.css";
import { fetchImages } from "./pictures-api";
import Loader from "../src/components/Loader/Loader";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";

function App() {
  const [pics, setPics] = useState([]);
  //add spinner
  const [isLoading, setIsLoading] = useState(false);
  //error tate
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
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

  const handleSubmit = async (query) => {
    try {
      setIsLoading(true);
      const data = await fetchImages(query);
      setPics(data.results);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <h1>Test</h1>
      <SearchBar onSubmit={handleSubmit} />
      {error && (
        <ErrorMessage
          message={"Failed to load images. Please try again later."}
        />
      )}
      {isLoading && <Loader isLoading={isLoading} />}
      {pics.length > 0 && <ImageGallery pics={pics} />}
    </>
  );
}

export default App;
