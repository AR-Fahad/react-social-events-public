import { Link, NavLink, Outlet } from "react-router-dom";
import "../Style/style.css";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import profile from "../assets/profile.jpg";
const Navbar = () => {
  const { user, userSignOut } = useContext(AuthContext);

  const handleSignOut = () => {
    userSignOut()
      .then()
      .catch((err) => console.log(err));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
    </>
  );
  return (
    <>
      <div className="max-w-6xl mx-auto">
        <div className="navbar bg-gray-200">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-200  rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <h3 className="text-lg md:text-3xl font-bold">
              AR<span className="text-indigo-500">Events</span>
            </h3>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu-horizontal gap-10 px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <div className="flex items-center gap-2">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL ? user.photoURL : profile} />
                  </div>
                </label>
                <p className="text-xs font-medium md:text-lg md:font-semibold">
                  {user?.displayName}
                </p>
                <div>
                  <button
                    onClick={handleSignOut}
                    className="btn btn-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-none"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="btn btn-sm bg-gradient-to-r from-sky-500 to-indigo-500 text-white border-none"
              >
                Sign in
              </Link>
            )}
          </div>
        </div>
        <Outlet></Outlet>
      </div>
      <footer className="footer p-10 bg-base-200 text-base-content mt-5 max-w-full">
        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </>
  );
};

export default Navbar;
