import React from "react";
// import { Nav, NavLink, Navbar, Offcanvas } from "react-bootstrap";
import { BsCamera } from "react-icons/bs";
import { GoThreeBars } from "react-icons/go";

const MyNavbar = () => {
  // const mystyle = {
  //   color: "white",
  //   backgroundColor: "rgb(20%, 20%, 20%)",
  //   alignItems: "center",
  //   textAlign: "left",
  //   width: "100%",
  //   height: "30px"
  // };
  return (
    <div className="bbox">
      <label>
        <BsCamera className="cam" size={25} />
      </label>
      <strong style={{ marginLeft: "10px" }}> Album</strong>
      <GoThreeBars className="three" />
    </div>
  );
};

export default MyNavbar;
