import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      id: 1143155,
      data: "19 fev 2019",
      hora: "10 AM",
      saida: '7 PM',
      producao: "9 hrs",
      descanso: '1h',
      tempo: '2hrs',
      status: "Approved",
    },
    {
      id: 1143155,
      data: "19 fev 2019",
      hora: "10 AM",
      saida: '7 PM',
      producao: "9 hrs",
      descanso: '1h',
      tempo: '2hrs',
      status: "Approved",
    },
    {
      id: 1143155,
      data: "19 fev 2019",
      hora: "10 AM",
      saida: '7 PM',
      producao: "9 hrs",
      descanso: '1h',
      tempo: '2hrs',
      status: "Approved",
    },
    {
      id: 1143155,
      data: "19 fev 2019",
      hora: "10 AM",
      saida: '7 PM',
      producao: "9 hrs",
      descanso: '1h',
      tempo: '2hrs',
      status: "Approved",
    },
    {
      id: 1143155,
      data: "19 fev 2019",
      hora: "10 AM",
      saida: '7 PM',
      producao: "9 hrs",
      descanso: '1h',
      tempo: '2hrs',
      status: "Approved",
    },
   
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">S. No</TableCell>
            <TableCell className="tableCell">Data</TableCell>
            <TableCell className="tableCell">Entrada</TableCell>
            <TableCell className="tableCell">Saída</TableCell>
            <TableCell className="tableCell">Produção</TableCell>
            <TableCell className="tableCell">Descanso</TableCell>
            <TableCell className="tableCell">Tempo</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">{row.data}</TableCell>
              <TableCell className="tableCell">{row.hora}</TableCell>
              <TableCell className="tableCell">{row.saida}</TableCell>
              <TableCell className="tableCell">{row.producao}</TableCell>
              <TableCell className="tableCell">{row.descanso}</TableCell>
              <TableCell className="tableCell">{row.tempo}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;