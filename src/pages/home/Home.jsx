import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Progress from '../../components/progress/Progress'
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table";
import Probar from "../../components/Probar/Probar";
import Status from "../../components/status/Status";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
         <div className="widgets">
           <Progress />
           <Probar/>
           <Status/>
           </div>
        <div className="charts">
          <Featured />
          <Chart title="Útimos 6 meses" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Tabela</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;