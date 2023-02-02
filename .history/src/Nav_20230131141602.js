import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  const history = useHistory();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <div className="nav__left">
          <img
            onClick={() => history.push("/")}
            className="nav__logo"
            src="./RAYFLIX.png"
            // alt="Netflix logo"
          />
          <div className="nav__item">
            <ul>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>News & Popular</li>
              <li>My List</li>
            </ul>
          </div>
        </div>

        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Avatar"
        />
      </div>
    </div>
  );
}

export default Nav;
