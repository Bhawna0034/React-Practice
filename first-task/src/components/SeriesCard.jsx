export const SeriesCard = (props) => {
    return (
        <li>
        <div>
          <img src={props.currentElement.image_url} alt={props.currentElement.image_alt} width="50%"/>
        </div>
        <h2>Title: {props.currentElement.title}</h2>
        <h3>Rating: {props.currentElement.rating}</h3>
        <p>Summary: {props.currentElement.description}</p>
        <h3>Cast: {props.currentElement.cast}</h3>
        <h3>Genre: {props.currentElement.genre}</h3>
        <a href={props.currentElement.watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </li>)
}