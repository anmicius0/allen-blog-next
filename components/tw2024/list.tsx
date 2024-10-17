import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import p3 from "@/assets/p3.json";

interface PollData {
  institution: string;
  date: string;
  sample: number;
  dpp: string;
  tpp: string;
  kmt: string;
  undecided: string;
}

const LatestPoll: React.FC = () => {
  const rows: PollData[] = p3 as unknown as PollData[];

  return (
    <TableContainer
      component={Paper}
      className="m-2 p-4 rounded overflow-hidden	" // Added max-width
    >
      <Table>
        <TableHead className="bg-gray-100">
          <TableRow>
            <TableCell className="px-4 py-3 text-left">Institution</TableCell>
            <TableCell className="px-4 py-3 text-right">Date</TableCell>
            <TableCell className="px-4 py-3 text-right">Sample</TableCell>
            <TableCell className="px-4 py-3 text-right">DPP</TableCell>
            <TableCell className="px-4 py-3 text-right">TPP</TableCell>
            <TableCell className="px-4 py-3 text-right">KMT</TableCell>
            <TableCell className="px-4 py-3 text-right">Undecided</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.institution + row.date}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <TableCell component="th" scope="row" className="px-4 py-3">
                {row.institution}
              </TableCell>
              <TableCell align="right" className="px-4 py-3">
                {row.date}
              </TableCell>
              <TableCell align="right" className="px-4 py-3">
                {row.sample}
              </TableCell>
              <TableCell align="right" className="px-4 py-3">
                {row.dpp}
              </TableCell>
              <TableCell align="right" className="px-4 py-3">
                {row.tpp}
              </TableCell>
              <TableCell align="right" className="px-4 py-3">
                {row.kmt}
              </TableCell>
              <TableCell align="right" className="px-4 py-3">
                {row.undecided}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LatestPoll;
