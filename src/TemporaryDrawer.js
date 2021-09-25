import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { grey, indigo } from "@mui/material/colors";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

const drawerWidth = 450;

const SidebarData = [
  {
    title: "Home",
    path: "/completed",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Create Requests",
    path: "/createRequests",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Track Requests",
    path: "/trackRequests",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Worklist",
    path: "/worklist",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
];

export default function PermanentDrawerLeft() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            backgroundColor: indigo[500],
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Typography
          variant="h4"
          sx={{
            fontSize: 40,
            color: grey[50],
            padding: 0,
            alignContent: "center",
            ml: 2,
            mt: -6,
            mb: 3,
          }}
        >
          <strong> Deployment Tracker</strong>
        </Typography>
        <Divider />
        <List sx={{ mt: 5 }}>
          {SidebarData.map((item, index) => (
            <ListItem
              sx={{ fontSize: 20, mt: 2, mb: 2 }}
              button
              key={item.title}
            >
              <ListItemIcon sx={{ fontSize: 40, color: grey[50] }}>
                {item.icon}
              </ListItemIcon>
              <Typography
                variant="h4"
                sx={{
                  fontSize: 25,
                  color: grey[50],
                  padding: 2,
                  alignContent: "center",
                }}
              >
                {item.title}
              </Typography>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
