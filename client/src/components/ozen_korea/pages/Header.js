import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { url } = props;
  return (
    <div>
      <ul>
        <li>
          <Link to={url}>Home</Link>
        </li>
        <li>
          <Link to={`${url}/about`}>About</Link>
        </li>
        {/* <li>
          <Link to={`${url}/menu`}>Menu</Link>
        </li> */}
        <li>
          <Link to={`${url}/contact`}>Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
