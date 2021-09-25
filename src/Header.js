import React from "react";
import "./Header.css";
import Avatar from "@mui/material/Avatar";
import { indigo } from "@mui/material/colors";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 20,
  },
}));

const profileDetails = {
  firstname: "Aravindh",
  lastname: "Sathya",
  role: "Developer",
};
let nameFirstLetter = null;
if (profileDetails.lastname != null) {
  nameFirstLetter =
    profileDetails.firstname.charAt(0) + profileDetails.lastname.charAt(0);
} else {
  nameFirstLetter = profileDetails.firstname.charAt(0);
}

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header">
      <h1 className="title">Deployment Tracker</h1>
      <LightTooltip
        title={
          <>
            {profileDetails.firstname + " " + profileDetails.lastname}
            <br />
            {"Role and Other Details"}
          </>
        }
        disableInteractive
        arrorw
      >
        <h1 className="profile">Hi, {profileDetails.firstname}</h1>
      </LightTooltip>
      <Avatar
        onClick={handleClick}
        sx={{
          width: 60,
          height: 60,
          bgcolor: indigo[500],
          fontSize: 25,
          letterSpacing: 2,
        }}
        className="profile__icon"
      >
        {nameFirstLetter}
      </Avatar>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 50,
              height: 50,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem sx={{ fontSize: 25 }}>
          <Avatar sx={{ fontSize: 25, marginRight: 100, bgcolor: indigo[500] }}>
            {" "}
            {nameFirstLetter}
          </Avatar>
          {profileDetails.firstname + " " + profileDetails.lastname}
          {<br />}
          {profileDetails.role}
        </MenuItem>
        <Divider />
        <MenuItem sx={{ fontSize: 25 }}>
          <ListItemIcon>
            <Settings sx={{ fontSize: 25 }} />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem sx={{ fontSize: 25 }}>
          <ListItemIcon>
            <Logout sx={{ fontSize: 25 }} />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Header;
