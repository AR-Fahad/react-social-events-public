import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [error, setError] = useState(null);
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const pic = e.target.pic.value;
    setError(null);
    if (
      password < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\]/.test(password)
    ) {
      setError("password should be strong and more then 5 characters");
      return;
    }
    createUser(email, password)
      .then((res) => {
        updateProfile(res.user, {
          displayName: name,
          photoURL: pic,
        })
          .then()
          .catch((err) => console.log(err));
        toast("Account created successfully");
      })
      .catch((err) => {
        toast("Already have an user with this email");
        console.log(err);
      });
  };
  return (
    <div className="hero bg-white py-5 text-white">
      <div className="hero-content w-full">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gray-800">
          <form onSubmit={handleRegister} className="card-body">
            <h3 className="text-white text-center text-2xl font-semibold">
              Create an account
            </h3>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Your Name<span className="text-red-700 text-xl">*</span>
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                className="input input-bordered"
                name="pic"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">
                  Your Email<span className="text-red-700 text-xl">*</span>
                </span>
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
                <span className="label-text">
                  Password<span className="text-red-700 text-xl">*</span>
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                required
              />
              {error && <p className="text-red-700">{error}</p>}
              <br />
              <p>
                <label htmlFor="terms" className="text-slate-400">
                  <input type="checkbox" name="" id="terms" required /> Accept
                  our terms and condition
                </label>
              </p>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary bg-gradient-to-r from-sky-500 to-indigo-500">
                Sign Up
              </button>
            </div>
            <p className="text-white">
              Already have an account ?{" "}
              <Link className="text-sky-500 hover:underline" to="/login">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Register;
