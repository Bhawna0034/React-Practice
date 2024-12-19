// import styles from "./Series.module.css";
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
    <li className="border border-slate-50 p-4 shadow-md">
      <div>
        <img className="w-full h-auto object-cover min-h-[250px] max-h-[250px] max-w-[300px]"src={image_url} alt={image_alt} />
      </div>
      <div className="flex flex-col gap-3 justify-between pt-3">
        <h2 className="text-white"><span className="font-bold">Title: </span>{title}</h2>
        <h3 className="text-white"><span className="font-bold">Rating: </span>{rating}</h3>
        <p className="text-white"><span className="font-bold">Summary: </span>{description}</p>
        <h3 className="text-white"><span className="font-bold">Cast: </span>{cast}</h3>
        <h3 className="text-white"><span className="font-bold">Genre: </span> {genre}</h3>
        <a href={watch_url} target="_blank">
          <button className="bg-red-600 text-white rounded-lg px-3 py-1">Watch Now</button>
        </a>
      </div>
    </li>
  );
};
