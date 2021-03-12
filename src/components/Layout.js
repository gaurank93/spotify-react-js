import React from "react";
import Player from "./player/Player";
import Sidebar from "./sidebar/Sidebar";

function Layout(props) {
  return (
    <>
      <Sidebar />
      {props.children}
      <Player />
    </>
  );
}

export default Layout;
