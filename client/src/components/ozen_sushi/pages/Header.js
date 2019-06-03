import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  const { ozen_sushi } = props;
  return (
    <>
      <ul>
        <li>
          <Link to={ozen_sushi}>Home</Link>
        </li>
        <li>
          <Link to={`${ozen_sushi}/about`}>About</Link>
        </li>
        <li>
          <Link to={`${ozen_sushi}/contact`}>Contact Us</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
