import { useState } from "react";
import { SongType } from "../context/songsContext";

function AddSongModal({
  isAddSongModalOpen,
  onSubmit,
}: {
  isAddSongModalOpen: React.Dispatch<React.SetStateAction<any>>;
  onSubmit: React.Dispatch<React.SetStateAction<any>>;
}) {
  const [songInfo, setSongInfo] = useState<SongType>({
    song_id: "",
    song_addedOn: "",
    song_name: "",
    song_link: "",
    song_source: "",
    song_thumbnail: null,
  });
  let image: string | null = null;
  if (songInfo.song_thumbnail)
    image = URL.createObjectURL(songInfo.song_thumbnail);
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (songInfo.song_name.length < 1 || songInfo.song_link.length < 1) return;
    const date = new Date();
    const addedOn =
      date.getDate().toString().padStart(2, "0") +
      "/" +
      (date.getMonth() + 1).toString() +
      "/" +
      date.getFullYear().toString();
    const newSong: SongType = {
      ...songInfo,
      song_addedOn: addedOn,
      song_id: date.toString(),
    };
    onSubmit(newSong);
    isAddSongModalOpen(false);
  };
  return (
    <>
      <div className="rounded-[2px] absolute bg-white z-30 min-h-[36rem] w-[50rem] h-fit inset-0 m-auto ">
        <div className="flex justify-between border-b px-6 py-4">
          <h5>Add Song</h5>
          <button onClick={() => isAddSongModalOpen(false)}>
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
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col justify-between">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 px-6 py-4"
          >
            <div className="flex flex-col">
              <label
                htmlFor="song_name"
                className="pb-2"
              >
                Song Name
              </label>
              <input
                className="border px-3 py-1 rounded-[2px]"
                id="song_name"
                type="text"
                placeholder="Song Name"
                required
                value={songInfo.song_name}
                onChange={(e) =>
                  setSongInfo({ ...songInfo, song_name: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="song_link"
                className="pb-2"
              >
                Song Link
              </label>
              <input
                className="border px-3 py-1 rounded-[2px]"
                id="song_link"
                type="text"
                placeholder="URL"
                required
                value={songInfo.song_link}
                onChange={(e) =>
                  setSongInfo({ ...songInfo, song_link: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="song_source"
                className="pb-2"
              >
                Song Source
              </label>
              <input
                className="border px-3 py-1 rounded-[2px]"
                id="song_source"
                type="text"
                placeholder="Source Name"
                required
                value={songInfo.song_source}
                onChange={(e) =>
                  setSongInfo({ ...songInfo, song_source: e.target.value })
                }
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="song_thumbnail"
                className="cursor-pointer border flex items-center gap-2 w-fit px-6 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-upload"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="17 8 12 3 7 8" />
                  <line
                    x1="12"
                    x2="12"
                    y1="3"
                    y2="15"
                  />
                </svg>
                Click to Upload Profile Thumbnail
              </label>
              <input
                id="song_thumbnail"
                type="file"
                onChange={(e) => {
                  if (e.target.files)
                    setSongInfo({
                      ...songInfo,
                      song_thumbnail: e.target.files[0],
                    });
                }}
                accept="image/*"
                placeholder="hi"
                className="hidden"
              />
              {/* </button> */}
              {songInfo.song_thumbnail && (
                <div className="my-2 flex justify-between items-center border px-6 py-2">
                  <div>
                    <img
                      src={image ? image : ""}
                      alt="song thumbnail"
                      className="inline-block me-2 max-h-[2rem] max-w-[2rem]"
                    />
                    <a href={songInfo.song_thumbnail?.name}>
                      {songInfo.song_thumbnail?.name}
                    </a>
                  </div>
                  <button
                    onClick={() =>
                      setSongInfo({ ...songInfo, song_thumbnail: null })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
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
                </div>
              )}
              <p className="opacity-50 py-6">
                Image has to be of aspect ratio 1:1 with a size of 3000 pixels x
                3000 pixels
              </p>
            </div>
          </form>
          <div className="footer border-t flex justify-end gap-2 py-2 px-4">
            <button
              className="border rounded-[2px] py-1 px-4"
              onClick={() => isAddSongModalOpen(false)}
            >
              Cancel
            </button>
            <button
              className="border rounded-[2px] py-1 px-4 bg-[var(--blue)] text-white"
              onClick={(e) => handleSubmit(e)}
            >
              Add
            </button>
          </div>
        </div>
      </div>
      <div
        className="inset-0 absolute h-full w-full bg-black opacity-50 z-10 "
        onClick={() => isAddSongModalOpen(false)}
      />
    </>
  );
}
export default AddSongModal;
