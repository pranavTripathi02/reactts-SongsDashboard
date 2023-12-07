import { useContext } from "react";
import { SongsContext } from "../context/songsContext";

const useSongs = () => {
    return useContext(SongsContext);
};

export default useSongs;
