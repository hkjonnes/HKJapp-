import React, { useState, useEffect } from 'react';
import songsData from '../data/songs.json';

export default function SongManager() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    setSongs(songsData);
  }, []);

  return (
    <div className="container p-4">
      <h2 className="text-2xl mb-4 flex items-center gap-2">
        <span style={{ color: 'purple', fontSize: 28 }}>🦋</span> My Songs
      </h2>

      <ul className="song-list">
        {songs.map((song, idx) => (
          <li key={idx} className="song-item">
            <span className="butterfly-icon">🦋</span>
            <div className="song-info">
              <div className="song-title">{song.title}</div>
              <div className="song-artist">{song.artist}</div>
              <audio controls src={song.file}></audio>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
