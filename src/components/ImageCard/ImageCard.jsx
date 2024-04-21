export default function ImageCard({ pic }) {
  return (
    <>
      <div>
        <img src={pic.urls.small} alt={pic.alt_description} />
      </div>
    </>
  );
}
