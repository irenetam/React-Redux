import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Header = ({ numberOfCourses }) => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeStyle}>
        Courses #{numberOfCourses}
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  );
};
Header.propTypes = {
  numberOfCourses: PropTypes.number.isRequired,
};
const mapStateToProps = (state) => {
  return {
    numberOfCourses: state.courses.length,
  };
};

export default connect(mapStateToProps)(Header);
