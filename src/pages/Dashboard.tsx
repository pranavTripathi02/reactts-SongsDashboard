import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import SongRow from "../components/SongRow";
import { SongType } from "../context/songsContext";
// import useAuth from "../hooks/useAuth";
import useSongs from "../hooks/useSongs";
import AddSongModal from "../components/AddSongModal";

function Dashboard() {
  // const { auth } = useAuth();

  const { songs, setSongs } = useSongs();
  const [isAddSongModalOpen, setIsAddSongModalOpen] = useState(false);

  const addNewSong = (song: SongType) => {
    setSongs([...songs, song]);
  };
  const deleteSong = (song: SongType) => {
    console.log("deleting...");
    console.log(song);
    setSongs(songs.filter((item: SongType) => item.song_id !== song.song_id));
  };
  const playSong = (song: SongType) => {
    console.log(song, "playing...");
  };

  return (
    <>
      <div className="relative h-screen w-screen flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar pageTitle="Songs">
            <button
              className="py-1 px-4 bg-[var(--secondary)] text-black"
              onClick={() => setIsAddSongModalOpen(true)}
            >
              Add Songs
            </button>
          </Navbar>
          {isAddSongModalOpen && (
            <AddSongModal
              isAddSongModalOpen={setIsAddSongModalOpen}
              onSubmit={addNewSong}
            />
          )}
          <div className="px-6">
            <div className="grid grid-cols-6 justify-between text-center uppercase py-4 border-b font-medium">
              <span className="col-start-1 col-end-2">Song Name</span>
              <span className="col-start-3">Source</span>
              <span className="col-start-4">Added On</span>
              <span className="col-start-5"></span>
              <span className="col-start-6"></span>
            </div>
            <div>
              {songs.map((song: SongType) => (
                <SongRow
                  key={song.song_id}
                  song={song}
                  deleteSong={deleteSong}
                  playSong={playSong}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
