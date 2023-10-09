import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Slider from "./Slider";
const Home = () => {
  const events = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/y5qPcd4/female-wedding-planner-working-ceremony.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <h3 className="text-white text-xl md:text-3xl font-bold">
              What you need <br /> is an Event <br /> to remember for a
              lifetime.
            </h3>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/L8nMDpy/event-manager-using-laptop-banquet-hall.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <h3 className="text-white text-xl md:text-3xl font-bold">
              What you need <br /> is an Event <br /> to remember for a
              lifetime.
            </h3>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/3dPB2Kb/female-wedding-planner-working-ceremony-1.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <h3 className="text-white text-xl md:text-3xl font-bold">
              What you need <br /> is an Event <br /> to remember for a
              lifetime.
            </h3>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {events.map((event) => (
          <Card key={event.id} e={event}></Card>
        ))}
      </div>
      <br />
      <div>
        <img
          className="w-full"
          src="https://i.ibb.co/znHVkbs/upcoming.png"
          alt=""
        />
      </div>
      <br />
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="w-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 py-10 mx-auto"
      >
        <h3 className="text-xl md:text-5xl text-white font-bold text-center">
          To know more
        </h3>
      </div>
      <br />
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="w-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 py-10 mx-auto"
      >
        <h3 className="text-xl md:text-5xl text-white font-bold text-center">
          Explore more
        </h3>
      </div>
    </div>
  );
};

export default Home;
