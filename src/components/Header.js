import React from "react";

import Login from "./Login";
import Nav from "./Nav";

function Header() {
  const headerStyle = {
    width: "100%",
    float: 'left'
  }

  return (
    <div style={headerStyle}>
      <Nav />
      <Login />
    </div>
  );
}

export default Header