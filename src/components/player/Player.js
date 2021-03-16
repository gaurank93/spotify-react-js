import { useEffect, useState, useRef } from "react";

function Player({ audioControlRef, audioSrc, songInfo, setSongInfo }) {
  const [playPause, setplayPause] = useState(true);
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  const textColor = {color: 'white'}
  const inputWidth ={width: '100%'}
  function getTime(time) {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  }
  const dragHandler = (e) => {
    audioControlRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };
  const start = () => {
    if (playPause) {
      audioControlRef.current.play();
      setplayPause(false);
    } else {
      audioControlRef.current.pause();
      setplayPause(true);
    }
  };

  return (
    <>
      <footer className="bg-gray-200 col-span-6 p-4 grid grid-cols-3 gap-6">
        <div className="flex items-center">
          <img
            className="h-14 w-14 mr-4 flex-shrink-0"
            src={audioSrc.SongImage}
            alt=""
          />
          <div className="mr-4">
            <div className="text-sm text-white text-line-clamp-1 font-light">
              {audioSrc.songName}
            </div>
            <div className="text-xs text-gray-100 text-line-clamp-1">
              <span>{audioSrc.artistName}</span>
            </div>
          </div>
          <div className="flex items-center">
            <button className="text-green-200 p-2">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M10 3.22l-.61-.6a5.5 5.5 0 0 0-7.78 7.77L10 18.78l8.39-8.4a5.5 5.5 0 0 0-7.78-7.77l-.61.61z" />
              </svg>
            </button>
            <button className="text-gray-100 p-2">
              <svg
                className="w-4 h-4"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="currentColor" fillRule="evenodd">
                  <path
                    d="M1 3v9h14V3H1zm0-1h14a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
                    fillRule="nonzero"
                  ></path>
                  <path d="M10 8h4v3h-4z"></path>
                </g>
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div className="flex items-center justify-center mb-3">
            <button className="w-5 h-5 text-gray-100 mr-6">
              <svg
                className="fill-current w-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z" />
              </svg>
            </button>
            <button className="w-5 h-5 text-gray-100 mr-6">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z" />
              </svg>
            </button>
            <button
              className="w-8 h-8 border border-gray-300 rounded-full flex text-gray-100 mr-6"
              onClick={start}
            >
              {!playPause ? (
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
            <button className="w-5 h-5 text-gray-100 mr-6">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z" />
              </svg>
            </button>
            <button className="w-5 h-5 text-gray-100">
              <svg
                className="fill-current w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 3v2a5 5 0 0 0-3.54 8.54l-1.41 1.41A7 7 0 0 1 10 3zm4.95 2.05A7 7 0 0 1 10 17v-2a5 5 0 0 0 3.54-8.54l1.41-1.41zM10 20l-4-4 4-4v8zm0-12V0l4 4-4 4z" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
          <p style={textColor}>{getTime(songInfo.currentTime)}</p>
            <div className="flex-1 mx-2">
              <div className="">
              <input
                value={songInfo.currentTime}
                type="range"
                max={songInfo.duration || 0}
                min={0}
                onChange={dragHandler}
                style={inputWidth}
              />
              <div style={trackAnim} className="animate-track"></div>
              </div>
            </div>
            <p style={textColor}>{songInfo.duration ? getTime(songInfo.duration) : "0:00"}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Player;
