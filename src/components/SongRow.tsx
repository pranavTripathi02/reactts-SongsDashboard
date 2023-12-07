import { SongType } from "../context/songsContext";

function SongRow({
  song,
  playSong,
  deleteSong,
}: {
  song: SongType;
  deleteSong: React.Dispatch<React.SetStateAction<any>>;
  playSong: React.Dispatch<React.SetStateAction<any>>;
}) {
  const { song_name, song_link, song_addedOn, song_source, song_thumbnail } =
    song;
  console.log(song_link);
  let image;
  if (song_thumbnail) image = URL.createObjectURL(song_thumbnail);
  return (
    <div className="grid grid-cols-6 justify-items-center text-center items-center py-4 border-b px-1 overflow-hidden">
      <span className="col-start-1 col-end-2 flex items-center gap-3 mx-4">
        <img
          src={image}
          alt=" song_thumbnail"
          className="max-h-[6rem] max-w-[6rem] border"
        />
        {song_name}
      </span>
      <span className="col-start-3">{song_source}</span>
      <span className="col-start-4">{song_addedOn}</span>
      <span className="col-start-5">
        <button onClick={() => playSong(song)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="3rem"
            height="3rem"
            viewBox="0 0 24 24"
          >
            <path
              fill="var(--secondary)"
              d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm-2 14.5v-9l6 4.5z"
            />
          </svg>
        </button>
      </span>
      <span className="col-start-6">
        <button onClick={() => deleteSong(song)}>
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
        </button>
      </span>
    </div>
  );
}

export default SongRow;
