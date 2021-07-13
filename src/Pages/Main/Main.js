import CurrentSong from "./CurrentSong";
import MusicList from "./MusicList";

import "./Main.scss";

const Main = () => {
  return (
    <div className="pages-main">
      <CurrentSong />
      <MusicList />
    </div>
  );
};

export default Main;
