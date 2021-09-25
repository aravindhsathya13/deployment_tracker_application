import React from "react";
import "./Home.css";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { grey, indigo } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid, List } from "@mui/material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";

let comcount = 10;
let pencount = 20;
let wkcount = 30;

const worklist = [
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Aravindh Sathya (173342) (168852)",
  },
];

const pending = [
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Aravindh Sathya (173342) (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Aravindh Sathya (173342) (168852)",
  },
];

const completed = [
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Aravindh Sathya (173342) (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
  {
    requestId: "IR 189087",
    workgroup: "CNS",
    currentApprover: "Aravindh Sathya (173342)",
  },
  {
    requestId: "SR 456789",
    workgroup: "SCV",
    currentApprover: "Bharath (168852)",
  },
];

function Home() {
  return (
    <>
      <div className="home__count">
        <Completed count={comcount} />
        <Pending count={pencount} />
        <Worklist count={wkcount} />
      </div>
      <div className="home__requests">
        <RequestsLayout />
      </div>
    </>
  );
}

function Completed({ count }) {
  return (
    <div className="completed">
      <h1 className="count">{count}</h1>
      <br />
      <h2 className="count__title">Completed</h2>
    </div>
  );
}

function Pending({ count }) {
  return (
    <div className="pending">
      <h1 className="count">{count}</h1>
      <br />
      <h2 className="count__title">Pending</h2>
    </div>
  );
}

function Worklist({ count }) {
  return (
    <div className="worklist">
      <h1 className="count">{count}</h1>
      <br />
      <h2 className="count__title">Worklist</h2>
    </div>
  );
}

function RequestsLayout() {
  return (
    <>
      {/* <div className="requests__layout"></div> */}
      <Box sx={{ ml: 70, mr: 15, flexGrow: 1 }}>
        <List
          sx={{
            width: "100%",
            height: 800,
            maxWidth: "100%",
            maxHeight: "100%",
            bgcolor: "background.paper",
            position: "relative",
            overflow: "auto",
            "& ul": { padding: 0 },
          }}
        >
          <Requests input={worklist} type="Worklist" />
          <br />
          <Requests input={pending} type="Pending" />
          <br />
          <Requests input={completed} type="Completed" />
        </List>
      </Box>
    </>
  );
}

function Requests({ input, type }) {
  return (
    <>
      <Typography variant="h4" color="#707070">
        <strong>{type}</strong>
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {input.map((requests, index) => (
          <Grid item xs={6} sm={2} md={2} key={index}>
            <Card
              variant="none"
              sx={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 345,
                padding: 2,
                // backgroundColor: indigo[500],
                color: indigo[500],
              }}
            >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {requests.requestId}
                  </Typography>
                  <Typography variant="h6" color="text.secondary">
                    {requests.workgroup}
                    <br />
                    {requests.currentApprover}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
        <Divider />
      </Grid>
    </>
  );
}

export default Home;
