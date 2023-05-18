import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Horas</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"4.45 hrs"} strokeWidth={5} />
        </div>
        <p className="title">Total horas no dia</p>
        <p className="amount">10 hrs</p>
        <p className="desc">
          Horas trabalhadas.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Hoje</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">10 hrs</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Última semana</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className="resultAmount">22 hrs</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Último mês</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">230 hrs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;