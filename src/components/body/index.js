import { useState, useRef, useEffect } from "react";
import Card from "../card";
import Header from "../header";
import Player from "../player/Player";

function BodySection(props) {
  const audioControlRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0,
  });
  const [recentlyPlayed, setrecentlyPlayed] = useState([
    {
      songName: "Beaver Creek",
      artistName: "Aso, Middle School, Aviino",
      SongImage: "/assets/covers/Aiguille.jpg",
      songLink: "/assets/songs/Beaver-Creek.mp3",
      isPlay: false,
      isHover: false,
      id: 0,
    },
    {
      songName: "FLY",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=2",
      songLink: "/assets/songs/Daylight.mp3",
      isPlay: false,
      isHover: false,
      id: 1,
    },
    {
      songName: "Ludwig van Beethoven",
      artistName: "Artist",
      SongImage: "https://picsum.photos/129.webp?random=3",
      songLink: "/assets/songs/Keep-Going.mp3",
      isPlay: false,
      isHover: false,
      id: 2,
    },
    {
      songName: " Hotel Del Luna OST",
      artistName: "By Jamie Lee",
      SongImage: "https://picsum.photos/129.webp?random=4",
      songLink: "/assets/songs/Nightfall.mp3",
      isPlay: false,
      isHover: false,
      id: 3,
    },
    {
      songName: " ITAEWON className (Original Television Soundtrack) Pt.2",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=5",
      songLink: "/assets/songs/Reflection.mp3",
      isPlay: false,
      isHover: false,
      id: 4,
    },
    {
      songName: "Preparation For a Journey",
      artistName: "Gaho",
      SongImage: "https://picsum.photos/129.webp?random=6",
      songLink: "/assets/songs/Under-the-City-Stars.mp3",
      isPlay: false,
      isHover: false,
      id: 5,
    },
  ]);
  const [audioData, setAudioData] = useState(recentlyPlayed[0]);
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
  function handleClick(dataPass) { 
    let tmp = [...recentlyPlayed];
    tmp.map((data) => {
      if (data.id === dataPass.id) {
        data.isPlay = !data.isPlay;
        data.isHover = data.isPlay;
      } else {
        data.isPlay = false;
        data.isHover = false;
      }
      return data
    });
    setrecentlyPlayed(tmp);
    setAudioData(dataPass)
  }
  function SongChange(id, type) {
    if (type === "forward") {
      setAudioData(recentlyPlayed[(id + 1) % recentlyPlayed.length]);
    } else if (type === "back") {
      if (id === 0) {
        setAudioData(recentlyPlayed[recentlyPlayed.length - 1]);
      } else {
        setAudioData(recentlyPlayed[(id - 1) % recentlyPlayed.length]);
      }
    }
  }
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration: duration,
      volume: e.target.volume,
    });
  };
  useEffect(() => {
    if (audioData.isPlay) {
      audioControlRef.current.play();
    }else{
      audioControlRef.current.pause();
    }
  }, [audioData, recentlyPlayed]);
  return (
    <>
      <main className="col-span-5 row-span-3 overflow-auto height-main-body">
        <Header loginFunction={props.loginFunction} />
        <section className="px-6 grid gap-6 mb-8">
          <div className="flex items-center">
            <div className="flex-1">
              <h3 className="text-2xl text-white">
                <a
                  className="border-b border-transparent hover:border-white"
                  href="!#"
                >
                  Recently played
                </a>
              </h3>
            </div>
            <div>
              <a
                className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                href="!#"
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
                    handleClick={handleClick}
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
                  href="!#"
                >
                  Made for Jedidiah
                </a>
              </h3>
            </div>
            <div>
              <a
                className="text-xs text-gray-100 tracking-widest uppercase hover:underline"
                href="!#"
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
      <Player
        audioControlRef={audioControlRef}
        audioData={audioData}
        setAudioData={setAudioData}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        SongChange={SongChange}
        handleClick={handleClick}
      />
      <audio
        ref={audioControlRef}
        src={audioData.songLink}
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
      ></audio>
    </>
  );
}

export default BodySection;
