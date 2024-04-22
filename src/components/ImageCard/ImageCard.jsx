import css from "./ImageCard.module.css";

export default function ImageCard({ pic }) {
  return (
    <>
      <div className={css.img}>
        <img src={pic.urls.small} alt={pic.alt_description} />
      </div>
    </>
  );
}
