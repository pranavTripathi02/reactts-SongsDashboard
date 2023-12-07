import { SongType } from "../context/songsContext";

function SongRow({ song }: { song: SongType }) {
  const { song_name, song_link, song_addedOn, song_source, song_thumbnail } =
    song;
  let image;
  if (song_thumbnail) image = URL.createObjectURL(song_thumbnail);
  return (
    <div className="flex justify-between items-center">
      <img
        src={image}
        alt=" song_thumbnail"
        className="max-h-[6rem] max-w-[6rem]"
      />
      <span>{song_name}</span>
      <span>{song_source}</span>
      <span>{song_addedOn}</span>
      <span className="song-play-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-play"
        >
          <polygon points="5 3 19 12 5 21 5 3" />
        </svg>
      </span>
      <span className="song-delete-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-trash"
        >
          <path d="M3 6h18" />
          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
          <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
        </svg>
      </span>
    </div>
  );
}

export default SongRow;
