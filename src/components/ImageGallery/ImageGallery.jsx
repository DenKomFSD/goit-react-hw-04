export default function ImageGallery({ pics }) {
  return (
    <>
      <ul>
        {pics.map((pic) => {
          return (
            <li key={pic.id}>
              <div>
                <img src={pic.urls.small} alt={pic.alt_description} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
