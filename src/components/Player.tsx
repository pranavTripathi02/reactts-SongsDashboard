// import { useEffect, useState } from "react";
import { SongType } from "../context/songsContext";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "./Player.css";

// const useAudio = (url: string) => {
//   const [audio] = useState(new Audio(url));
//   const [playing, setPlaying] = useState(false);
//
//   const toggle = () => setPlaying(!playing);
//
//   useEffect(() => {
//     playing ? audio.play() : audio.pause();
//   }, [playing]);
//
//   console.log(url);
//   useEffect(() => {
//     audio.addEventListener("ended", () => setPlaying(false));
//     return () => {
//       audio.removeEventListener("ended", () => setPlaying(false));
//     };
//   }, []);
//
//   return [playing, toggle];
// };
const PauseButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-pause"
  >
    <rect
      width="4"
      height="16"
      x="6"
      y="4"
    />
    <rect
      width="4"
      height="16"
      x="14"
      y="4"
    />
  </svg>
);
const PlayButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-play"
  >
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const PreviousButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-skip-back"
  >
    <polygon points="19 20 9 12 19 4 19 20" />
    <line
      x1="5"
      x2="5"
      y1="19"
      y2="5"
    />
  </svg>
);
const NextButton = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="black"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-skip-forward"
  >
    <polygon points="5 4 15 12 5 20 5 4" />
    <line
      x1="19"
      x2="19"
      y1="5"
      y2="19"
    />
  </svg>
);
const customIcons = {
  pause: PauseButton,
  play: PlayButton,
  rewind: PreviousButton,
  forward: NextButton,
};

function Player({ song }: { song: SongType | null }) {
  if (!song?.song_link) return null;
  let image;
  if (song.song_thumbnail) image = URL.createObjectURL(song.song_thumbnail);
  // const [playing, toggle] = useAudio(song?.song_link);
  // useEffect(()=>{},[song])
  return (
    <div className="absolute bottom-0 left-0 right-0 w-full bg-white flex">
      <div className="w-full min-h-[6rem] flex items-end justify-around">
        <AudioPlayer
          className="border-2 mx-auto"
          src={song.song_link}
          // showJumpControls
          showFilledProgress={true}
          // layout="horizontal"
          customIcons={customIcons}
          customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
          customControlsSection={[
            <div className="flex items-center gap-4">
              <img
                src={image}
                className="max-h-[6rem] h-[6rem] max-w-[6rem] min-w-[6rem] overflow-hidden border p-0 m-0"
              />
              <span className="text-[1.25rem] font-medium">
                {song.song_name}
              </span>
            </div>,
            RHAP_UI.MAIN_CONTROLS,
          ]}
        />
      </div>
    </div>
  );
}

export default Player;
