import "./progress.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Progress = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Banco de Horas</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"4.45 hrs"} strokeWidth={5} />
        </div>
        <button>Horas</button>
        </div>
      </div>
    
  );
};

export default Progress;