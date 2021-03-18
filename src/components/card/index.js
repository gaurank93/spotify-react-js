import React from "react";

function Card(props) {
  return (
    <div
      className="bg-gray-200 rounded-lg p-5"
      onMouseEnter={() => {
        props.handleMouseEnter(props.data.id);
      }}
      onMouseLeave={() => {
        if (!props.data.isPlay) {
          props.handleMouseLeave(props.data.id);
        }
      }}
    >
      <div className="relative pt-full mb-4">
        <img
          className="block w-full absolute inset-0"
          src={props.data.SongImage}
          alt={props.data.songName}
        />
      </div>
      <div className="text-sm text-white text-line-clamp-1 mb-1 block"
      style={{color: props.data.isPlay && "green"}}
      >
        {props.data.songName}
      </div>
      <div className="relative pb-5"
      style={{color: props.data.isPlay && "green"}}
      >
        <span className="text-xs text-gray-100 text-line-clamp-1">
          {props.data.artistName}
        </span>
        {props.data.isHover && (
          <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white"
          onClick={() => {
            props.handleClick(props.data);
          }}
          >
            {props.data.isPlay ? (
              <svg
                className="fill-current h-5 w-5 m-auto"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
              </svg>
            ) : (
              <svg
                className="fill-current h-3 w-4 m-auto"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="play"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 440 510"
              >
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
              </svg>
            )}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
