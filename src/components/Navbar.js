import React, { useState, useEffect } from "react";

import classes from "./Navbar.module.css";

function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={[classes.nav, show && classes.nav__black].join(" ")}>
      <img
        className={classes.logo}
        src="https://img.icons8.com/color/240/000000/netflix.png"
        alt="Netflix-Logo"
      />
    </div>
  );
}

export default Navbar;
