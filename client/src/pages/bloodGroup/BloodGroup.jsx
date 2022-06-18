import "./bloodGroup.css";
import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import axios from "axios";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name,  phone, blood, city) {
  return { name,  phone, blood, city };
}

export default function BasicTable() {
  const [users, setUsers] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("https://donner-back-end.herokuapp.com/api/users/find");
      console.log("res: ", res);
      // console.log("res: ", res.status);
      setUsers(res.data); //data index contains all info
      
      setLoading(true);
      // const res = await fetch("https://donner-back-end.herokuapp.com/api/users/find");
      // const data = await res.json();
      // console.log(data);
    };

    getData();
  }, []);

  const classes = useStyles();

  const rows = users.map((item) =>
    createData(item.name, item.phone, item.BloodGroup, item.city)
  );
  // const rows = users.map((row) =>
  //   createData(row.name, row.phone, row.BloodGroup, row.city)
  // );

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Button variant="contained" color="primary">
              Swipe Left if content is not visible
            </Button>
          </div>
        </div>
        {loading ?
        <div className="row">
          <div className="col col--12">
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow className={classes.positon}>
                    <TableCell>Name </TableCell>
                    <TableCell align="right">Phone Number</TableCell>
                    <TableCell align="right">Blood Group</TableCell>
                    {/* <TableCell align="right">Email</TableCell> */}
                    <TableCell align="right">City/Town</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.phone}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      {/* <TableCell align="right">{row.email}</TableCell> */}
                      <TableCell align="right">{row.phone}</TableCell>
                      <TableCell align="right">{row.blood}</TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        : <div>Loading Please Wait.....</div>}
      </div>
    </>
  );
}
