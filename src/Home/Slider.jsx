import Marquee from "react-fast-marquee";

const Slider = () => {
  return (
    <div className="bg-blue-200 flex gap-2 items-center rounded mt-2">
      <h3 className="bg-blue-700 text-white p-2 rounded">Our Services:</h3>
      <Marquee className="font-bold">
        Event Planning, Venue Selection and Booking, Event Design, Program
        Development, Destination Event Planning etc.
      </Marquee>
    </div>
  );
};

export default Slider;
