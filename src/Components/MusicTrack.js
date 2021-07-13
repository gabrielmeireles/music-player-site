import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const StyledSlider = withStyles({
  root: {
    color: "#D6553A",
    height: 4,
  },
  thumb: {
    height: 20,
    width: 20,
    marginTop: -8,
    marginLeft: -12,
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const MusicTrack = () => {
  return <StyledSlider value={20} />;
};

export default MusicTrack;
