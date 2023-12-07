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

  return (
    <>
      <div className="relative h-screen w-screen flex">
        <Sidebar />
        <div className="flex flex-col w-full">
          <Navbar />
          {isAddSongModalOpen && (
            <AddSongModal
              isAddSongModalOpen={setIsAddSongModalOpen}
              onSubmit={addNewSong}
            />
          )}
          <button
            className="py-1 px-4 bg-[var(--secondary)] text-black"
            onClick={() => setIsAddSongModalOpen(true)}
          >
            Add Songs
          </button>
          <div className="px-6 ">
            {songs.map((song: SongType) => (
              <SongRow
                key={song.song_id}
                song={song}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
