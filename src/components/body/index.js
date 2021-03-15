import { useEffect, useState } from "react";
import Card from "../card";
import Header from "../header";

function BodySection() {
  const [recentlyPlayed, setrecentlyPlayed] = useState([
    {
      songName: "Chinese Lo-FI",
      artistName: "By @Nike1nike",
      SongImage: "https://picsum.photos/129.webp?random=1",
      songLink:"https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 1,
    },
    {
      songName: "FLY",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=2",
      songLink: "/Indila-DernièreDanse.mp3",
      isPlay: false,
      isHover: false,
      id: 2,
    },
    {
      songName: "Ludwig van Beethoven",
      artistName: "Artist",
      SongImage: "https://picsum.photos/129.webp?random=3",
      songLink:"https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 3,
    },
    {
      songName: " Hotel Del Luna OST",
      artistName: "By Jamie Lee",
      SongImage: "https://picsum.photos/129.webp?random=4",
      songLink: "/Indila-DernièreDanse.mp3",
      isPlay: false,
      isHover: false,
      id: 4,
    },
    {
      songName: " ITAEWON className (Original Television Soundtrack) Pt.2",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=5",
      songLink:"https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_2MG.mp3",
      isPlay: false,
      isHover: false,
      id: 5,
    },
    {
      songName: "Preparation For a Journey",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=6",
      songLink: "/Indila-DernièreDanse.mp3",
      isPlay: false,
      isHover: false,
      id: 6,
    },
  ]);

  const [audio,setAudio] = useState("/Indila-DernièreDanse.mp3");

  function songSelect(songLink){
    setAudio(prev=>songLink)
  }
let aud
  function startSong(){  
     aud = new Audio(audio)
    aud.play();
  }

  useEffect(()=>{
    startSong()
  },[audio])

  function handleMouseEnter(id) {
    let tmp = [...recentlyPlayed];
    tmp.map((data) => {
      if (data.id === id) {
        data.isHover = true;
      }
      return data;
    });
    setrecentlyPlayed(tmp);
  }
  function handleMouseLeave(id) {
    let tmp = [...recentlyPlayed];
    tmp.map((data) => {
      if (data.id === id) {
        data.isHover = false;
      }
      return data;
    });
    setrecentlyPlayed(tmp);
  }

  return (
    <main className="col-span-5 row-span-3 overflow-auto height-main-body">
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
          {recentlyPlayed &&
            recentlyPlayed.map((data) => {
              return (
                <Card
                  key={data.id}
                  data={data}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  songSelect={songSelect}
                />
              );
            })}
        </div>
      </section>
      <section className="px-6 grid gap-6 mb-8">
        <div className="flex items-center">
          <div className="flex-1">
            <h3 className="text-2xl text-white">Your heavy rotation</h3>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-4">
          {recentlyPlayed &&
            recentlyPlayed.map((data) => {
              return (
                <Card
                  key={data.id}
                  data={data}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              );
            })}
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
          {recentlyPlayed &&
            recentlyPlayed.map((data) => {
              return (
                <Card
                  key={data.id}
                  data={data}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                />
              );
            })}
        </div>
      </section>
    </main>
  );
}

export default BodySection;
