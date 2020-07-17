import React from 'react';
// import { Link } from 'react-router-dom';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {CustomCalendar} from "../CustomCalendar/CustomCalendar";
import CustomScheduler from "../CustomScheduler/CustomScheduler";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>Dashboard</h1>
        </Grid>
        {/*<Grid item xs={3}>*/}
        {/*  <Paper><CustomCalendar/></Paper>*/}
        {/*</Grid>*/}
        <Grid item xs={10}>
          <Paper><CustomScheduler/></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
