import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { userSignIn, xProvider } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();
  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSignIn(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        e.target.reset();
      })
      .catch((err) => console.log(err));
  };
  const googleSignIn = () => {
    xProvider(googleProvider)
      .then(() => navigate(location?.state ? location.state : "/"))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero bg-base-200 py-5">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-8">
          <form onSubmit={handleSignIn} className="card-body">
            <h3 className="text-white text-center text-2xl font-semibold">
              Account
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-sky-500 to-indigo-500">
                Sign in
              </button>
            </div>
            <p className="text-white">
              Don't have an account ?{" "}
              <Link className="text-sky-500 hover:underline" to="/register">
                Sign up
              </Link>
            </p>
            <br />
            <p className="text-xl text-white font-semibold text-center">Or,</p>
          </form>
          <button
            onClick={googleSignIn}
            className="btn btn-sm text-white bg-gradient-to-r from-sky-500 to-indigo-500 w-3/4 mx-auto"
          >
            <FcGoogle></FcGoogle> google Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
