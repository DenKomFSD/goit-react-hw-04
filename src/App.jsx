import { useEffect, useState } from "react";
import "./App.css";
import { fetchImages } from "./pictures-api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
// import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [pics, setPics] = useState([]);
  useEffect(() => {
    async function getImages() {
      const data = await fetchImages("dogs");
      setPics(data.results);
    }

    getImages();
  }, []);
  return (
    <>
      <h1>Test</h1>
      {/* <SearchBar onSubmit={} /> */}
      {pics.length > 0 && <ImageGallery pics={pics} />}
    </>
  );
}

export default App;
