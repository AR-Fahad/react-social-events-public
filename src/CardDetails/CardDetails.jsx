import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const CardDetails = () => {
  const [ev, setEv] = useState({});
  const { Id } = useParams();
  const parseId = parseInt(Id);
  const events = useLoaderData();
  useEffect(() => {
    setEv(events.find((event) => parseId === event.id));
  }, [events, parseId]);

  console.log(ev);
  return (
    <div className="card bg-zinc-300 shadow-xl mt-7">
      <figure className="px-10 pt-10">
        <img src={ev.img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{ev.event}</h2>
        <p>{ev.description}</p>
        <p>Venue: {ev.venue}</p>
        <p>Capacity: {ev.guests}</p>
        <p>Expenses: {ev.cost}</p>

        <div className="card-actions">
          <button className="btn btn-primary">Book Now</button>
        </div>
        <p className="text-xl font-semibold">Or,</p>
        <div className="card-actions">
          <Link to="/">
            <button className="btn btn-primary">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
