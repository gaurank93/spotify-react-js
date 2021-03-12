import React from "react";
import Player from "./player/Player";
import Sidebar from "./sidebar/Sidebar";

function Layout(props) {
  return (
    <>
    <div className="grid grid-rows-3 grid-cols-6 h-full">
      <Sidebar />
      {props.children}
      <Player />
      </div>
    </>
  );
}

export default Layout;
