import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import BeenhereIcon from '@mui/icons-material/Beenhere';
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaymentIcon from '@mui/icons-material/Payment';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import TroubleshootIcon from '@mui/icons-material/Troubleshoot';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Nbula</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <p className="title">PARAMETROS</p>
          
          <Link to="/utilizador" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Utilizador</span>
            </li>
          </Link>
          <Link to="/motorista" style={{ textDecoration: "none" }}>
            <li>
              <DirectionsCarFilledIcon className="icon" />
              <span>Motorista</span>
            </li>
          </Link>
          <Link to="/promocoes" style={{ textDecoration: "none" }}>
            <li>
              <PriceCheckIcon className="icon" />
              <span>Promoções</span>
            </li>
          </Link>
          <Link to="/agendamento" style={{ textDecoration: "none" }}>
            <li>
              <NewspaperIcon className="icon" />
              <span>Agendamento</span>
            </li>
          </Link>
          <Link to="/rastreamento" style={{ textDecoration: "none" }}>
            <li>
              <TroubleshootIcon className="icon" />
              <span>Rastreamento</span>
            </li>
          </Link>
          <Link to="/metodos" style={{ textDecoration: "none" }}>
            <li>
              <CurrencyExchangeIcon className="icon" />
              <span>Métodos de Pagamento</span>
            </li>
          </Link>
          <Link to="/servicos" style={{ textDecoration: "none" }}>
            <li>
              <DesignServicesIcon className="icon" />
              <span>Serviços</span>
            </li>
          </Link>
          
          <p className="title">DISPACHER</p>
          <p className="title">FATURAÇÃO</p>
          <Link to="/faturas" style={{ textDecoration: "none" }}>
            <li>
              <PointOfSaleIcon  className="icon" />
              <span>Faturas</span>
            </li>
          </Link>
          <Link to="/credito" style={{ textDecoration: "none" }}>
            <li>
            <PaymentIcon className="icon" />
            <span>Crédito</span>
          </li>
          </Link>
          
          <p className="title">RELATÓRIOS</p>
          <p className="title">CONFIGURAÇÕES</p>
          <Link to="/treinamento" style={{ textDecoration: "none" }}>
            <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Treinamento</span>
          </li>
          </Link>
          <Link to="/ajuda" style={{ textDecoration: "none" }}>
            <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Ajuda</span>
          </li>
          </Link>
          
          <p className="title">SUPORTE</p>
          <Link to="/suporteCliente" style={{ textDecoration: "none" }}>
            <li>
              <SupportAgentIcon className="icon" />
              <span>Suporte ao Cliente</span>
            </li>
          </Link>
          <p className="title">INCIDENTES E FEEDBACK</p>
          <Link to="/sos" style={{ textDecoration: "none" }}>
            <li>
              <CurrencyExchangeIcon className="icon" />
              <span>SOS</span>
            </li>
          </Link>
          <Link to="/avaliacao" style={{ textDecoration: "none" }}>
            <li>
              <BeenhereIcon className="icon" />
              <span>Avaliação</span>
            </li>
          </Link>
          <p className="title">USER</p>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          </Link>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
          </Link>
          
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;