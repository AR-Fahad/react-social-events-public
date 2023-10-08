import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Card = ({ e }) => {
  const { id, img, event, description } = e;
  return (
    <>
      <div className="card bg-zinc-300 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold">{event}</h2>
          <p>{description}</p>
          <Link to={`/event/${id}`}>
            <div className="card-actions ">
              <p className="text-center text-blue-700 hover:underline">
                Show Details
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  e: PropTypes.object,
};

export default Card;
