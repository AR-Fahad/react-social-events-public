import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center py-16 space-y-5">
      <h3 className="text-5xl font-extrabold">404</h3>
      <p className="text-3xl font-semibold">Oops! The page can't be found</p>
      <p>The page you are looking for may be deleted</p>
      <Link to="/">
        <button className="btn mt-5 btn-md bg-white text-indigo-500 border-indigo-500">
          Go Back To Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
