import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-base-200">
      <div className="text-center pt-10">
        <h3 className="text-white text-center text-2xl font-semibold">
          Sign In With
        </h3>
        <br />
        <button className="btn btn-link text-blue-700 border-none text-2xl font-semibold">
          Google
        </button>
      </div>
      <br />
      <h3 className="text-white text-center text-2xl font-semibold">Or,</h3>
      <br />

      <div className="hero bg-base-200 pb-5">
        <div className="hero-content w-3/4">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
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
                <button className="btn btn-primary">Sign in</button>
              </div>
              <p className="text-white">
                Don't have an account ?{" "}
                <Link className="text-blue-700 hover:underline" to="/register">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
