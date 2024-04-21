import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ pics }) {
  return (
    <>
      <ul>
        {pics.map((pic) => {
          return (
            <li key={pic.id}>
              <ImageCard pic={pic} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
