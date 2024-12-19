import styles from './Series.module.css';
export const SeriesCard = ({ data }) => {
  // console.log(props);
  const {
    id,
    title,
    rating,
    description,
    cast,
    genre,
    watch_url,
    image_url,
    image_alt,
  } = data;
  return (
    <li>
      <div>
        <img src={image_url} alt={image_alt} />
      </div>
      <div className = {styles.content}>
        <h2>Title: {title}</h2>
        <h3>Rating: {rating}</h3>
        <p>Summary: {description}</p>
        <h3>Cast: {cast}</h3>
        <h3>Genre: {genre}</h3>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
