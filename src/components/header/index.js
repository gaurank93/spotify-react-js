import React, { useState } from "react";

function Header(props) {
  const [profileToggle, setProfileToggle] = useState(false);
  function hendleClick() {
    if (profileToggle === true) 
    setProfileToggle(false);
    else
    setProfileToggle(true);
    console.log(profileToggle);
  }
  return (
    <header className="px-6 py-4 mb-6 bg-gray-600 flex items-center justify-between sticky top-0 z-10">
      <div className="flex items-center">
        <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex mr-4 opacity-50 cursor-not-allowed">
          <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M15.54 21.15L5.095 12.23 15.54 3.31l.65.76-9.555 8.16 9.555 8.16"
            ></path>
          </svg>
        </button>
        <button className="h-8 w-8 bg-gray-500 rounded-full text-white flex">
          <svg className="h-5 w-5 m-auto" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M7.96 21.15l-.65-.76 9.555-8.16L7.31 4.07l.65-.76 10.445 8.92"
            ></path>
          </svg>
        </button>
      </div>
      <div>
        <button
          className="text-xs text-white bg-gray-500 rounded-full p-px pr-3"
          onClick={hendleClick}
        >
          <img
            src="https://picsum.photos/129.webp?random=7"
            className="w-7 h-7 inline-block rounded-full mr-2"
            alt=""
          />
          Jedidiah Avelino
        </button>
        <div className={profileToggle ? "displayBlock" : "displayNone"}>
          <button
            className="text-sm text-white bg-gray-500 rounded-full p-px pr-2"
            onClick={() => {
              props.loginFunction(false);
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
