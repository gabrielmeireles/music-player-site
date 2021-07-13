import { useEffect } from "react";
import MusicTrack from "../../Components/MusicTrack";
import { play } from "../../Infrastructure/Spotify";

const CurrentSong = () => {
  const player = window.spotifyPlayer;

  useEffect(() => {
    if (window.spotifyPlayer) {
      play({
        playerInstance: player,
        spotify_uri: "spotify:track:7xGfFoTpQ2E7fRF5lN10tr",
      });
    }
  }, [player]);

  return (
    <div className="main-currentSong">
      <h1 className="currentSong-nowPlaying">Tocando agora</h1>
      <div className="currentSong-content">
        <img
          alt="album"
          src="https://upload.wikimedia.org/wikipedia/pt/e/eb/Capa_de_Anti_%28%C3%A1lbum%29.png"
          className="currentSong-image"
        />
        <p className="currentSong-title">Anti</p>
        <p className="currentSong-artist">Rihanna</p>
      </div>
      <MusicTrack />
    </div>
  );
};

export default CurrentSong;
