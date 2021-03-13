import { useState } from "react";
import Header from "../header";

function BodySection() {
  const [dataToShow, setDataToShow] = useState([
    {
      songName: "Chinese Lo-FI",
      artistName: "By @Nike1nike",
      SongImage: "https://picsum.photos/129.webp?random=1",
      songLink:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 1,
    },
    {
      songName: "FLY",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=2",
      songLink:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 2,
    },
    {
      songName: "Ludwig van Beethoven",
      artistName: "Artist",
      SongImage: "https://picsum.photos/129.webp?random=3",
      songLink:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 3,
    },
    {
      songName: " Hotel Del Luna OST",
      artistName: "By Jamie Lee",
      SongImage: "https://picsum.photos/129.webp?random=4",
      songLink:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 4,
    },
    {
      songName: " ITAEWON className (Original Television Soundtrack) Pt.2",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=5",
      songLink:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 5,
    },
    {
      songName: "Preparation For a Journey",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=6",
      songLink:
        "https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 6,
    },
  ]);

  function handleMouseEnter(id) {
    let tmp = [...dataToShow];
    tmp.map((data) => {
      if (data.id === id) {
        data.isHover = true;
      }
      return data;
    });
    setDataToShow(tmp);
  }
  function handleMouseLeave(id) {
    let tmp = [...dataToShow];
    tmp.map((data) => {
      if (data.id === id) {
        data.isHover = false;
      }
      return data;
    });
    setDataToShow(tmp);
  }

  return (
    <main className="col-span-5 row-span-3 overflow-auto">
      <Header />
      <section className="px-6 grid gap-6 mb-8">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-2xl text-white">
              <a
                className="border-b border-transparent hover:border-white"
                href=""
              >
                Recently played
              </a>
            </h3>
          </div>
          <div>
            <a
              className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
              href=""
            >
              See all
            </a>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {dataToShow &&
            dataToShow.map((item) => (
              <div
                className="bg-gray-200 rounded-lg p-5"
                key={`${item.songName}-${item.artistName}`}
                onMouseEnter={() => {
                  handleMouseEnter(item.id);
                }}
                onMouseLeave={() => {
                  handleMouseLeave(item.id);
                }}
              >
                <div className="relative pt-full mb-4">
                  <img
                    className="block w-full absolute inset-0"
                    src={item.SongImage}
                    alt={item.songName}
                  />
                </div>
                <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                  {item.songName}
                </div>
                <div className="relative pb-5">
                  <span className="text-xs text-gray-100 text-line-clamp-1">
                    {item.artistName}
                  </span>
                  {item.isHover && (
                    <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white">
                      {/* <svg
                        className="fill-current h-5 w-5 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                      </svg> */}
                      <i className="fa fa-play" aria-hidden="true"></i>
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="px-6 grid gap-6 mb-8">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-2xl text-white">Your heavy rotation</h3>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {dataToShow &&
            dataToShow.map((item) => (
              <div
                className="bg-gray-200 rounded-lg p-5"
                key={`second${item.songName}-${item.artistName}`}
              >
                <div className="relative pt-full mb-4">
                  <img
                    className="block w-full absolute inset-0"
                    src={item.SongImage}
                    alt={item.songName}
                  />
                </div>
                <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                  {item.songName}
                </div>
                <div className="relative pb-5">
                  <span className="text-xs text-gray-100 text-line-clamp-1">
                    {item.artistName}
                  </span>
                  {item.isHover && (
                    <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white">
                      <svg
                        className="fill-current h-5 w-5 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
      <section className="px-6 grid gap-6 mb-8">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-2xl text-white">
              <a
                className="border-b border-transparent hover:border-white"
                href=""
              >
                Made for Jedidiah
              </a>
            </h3>
          </div>
          <div>
            <a
              className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
              href=""
            >
              See all
            </a>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {dataToShow &&
            dataToShow.map((item) => (
              <div
                className="bg-gray-200 rounded-lg p-5"
                key={`third${item.songName}-${item.artistName}`}
              >
                <div className="relative pt-full mb-4">
                  <img
                    className="block w-full absolute inset-0"
                    src={item.SongImage}
                    alt={item.songName}
                  />
                </div>
                <div className="text-sm text-white text-line-clamp-1 mb-1 block">
                  {item.songName}
                </div>
                <div className="relative pb-5">
                  <span className="text-xs text-gray-100 text-line-clamp-1">
                    {item.artistName}
                  </span>
                  {item.isHover && (
                    <button className="absolute right-0 top-0 w-10 h-10 bg-green-200 rounded-full flex text-white">
                      <svg
                        className="fill-current h-5 w-5 m-auto"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5 4h3v12H5V4zm7 0h3v12h-3V4z" />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
}

export default BodySection;
