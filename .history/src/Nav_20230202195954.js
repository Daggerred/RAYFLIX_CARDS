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
            // onClick={() => history.push("/")}
            // className="nav__logo"
            // src="/Users/shailendrasisodia/Documents/Netflix-clone-master/src/RAYFLIX.png"
            // alt="Rayflix logo"
          />
          <div className="nav__item">
            <ul>
              <li
              onClick={() => history.push("/")}
              className="nav__logo">Home</li>
              <li onClick={() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")}
              >TV Shows</li>
              <li>Movies</li>
              <li>News & Popular</li>
              {/* <li>My List</li> */}
              <li
              onClick={() => history.push("/profile")}
              className="nav__avatar">My Profile</li>
            </ul>
          </div>
        </div>

        {/* <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
          alt="Avatar"
        /> */}
      </div>
    </div>
  );
}

export default Nav;
