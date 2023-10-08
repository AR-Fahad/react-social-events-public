import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import Slider from "./Slider";
const Home = () => {
  const events = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-3">
        {events.map((event) => (
          <Card key={event.id} e={event}></Card>
        ))}
      </div>
      <br />
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="w-1/2 bg-slate-600 py-10 mx-auto"
      >
        <h3 className="text-xl md:text-5xl text-white font-bold text-center">
          To know more
        </h3>
      </div>
      <br />
      <div
        data-aos="fade-left"
        data-aos-duration="3000"
        className="w-1/2 bg-slate-600 py-10 mx-auto"
      >
        <h3 className="text-xl md:text-5xl text-white font-bold text-center">
          Explore more
        </h3>
      </div>
    </div>
  );
};

export default Home;
