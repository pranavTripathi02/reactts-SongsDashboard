import React, { createContext, useState } from "react";

export type SongType = {
  song_id: string;
  song_name: string;
  song_link: string;
  song_addedOn: string;
  song_source?: string;
  song_thumbnail?: File | null;
};

type Props = {
  children?: React.ReactNode;
};

const SongsContext = createContext<any>(null);

const SongsProvider = ({ children }: Props) => {
  const [songs, setSongs] = useState<SongType[]>([]);

  return (
    <SongsContext.Provider value={{ songs, setSongs }}>
      {children}
    </SongsContext.Provider>
  );
};

export { SongsContext, SongsProvider };
