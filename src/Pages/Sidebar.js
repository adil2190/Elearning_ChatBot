import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { AiFillCaretDown } from "react-icons/ai";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import { ReactComponent as ChatIcon } from "../Assets/Icon ionic-ios-chatbubbles.svg";
import { ReactComponent as DashboardIcon } from "../Assets/Icon material-dashboard.svg";
import { ReactComponent as LibraryIcon } from "../Assets/Icon material-library-books.svg";
import { ReactComponent as LibraryIcon1 } from "../Assets/library.svg";
import { ReactComponent as LogoutIcon } from "../Assets/Icon feather-log-out.svg";
// import { ReactComponent as ProfileIcon } from "../../Assets/student-profile.svg";
import ProfileIcon from "../Assets/student-profile.png";

import Logo from "../Assets/logo2.png";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: "#452380",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Sidebar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className="logo-container">
        <div className="logo-box">
          <img src={Logo} alt="" height="100%" width="100%" />
        </div>
      </div>
      <div className={classes.toolbar} />
      {/* <Divider /> */}
      <Link className="text-dec-none" to="/dashboard/default">
        <ListItem style={{ marginTop: "10px" }} button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <p className="list-item">Dashboard</p>
        </ListItem>
      </Link>

      <Link className="text-dec-none" to="/dashboard/mycourses">
        <ListItem style={{ marginTop: "10px" }} button>
          <ListItemIcon>
            <LibraryIcon />
          </ListItemIcon>
          <p className="list-item">My Courses</p>
        </ListItem>
      </Link>

      {/* <Link className="text-dec-none" to="/"> */}
      <ListItem style={{ marginTop: "10px" }} button>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>
        <p className="list-item">AI Chatbot</p>
      </ListItem>
      {/* </Link> */}

      <Link className="text-dec-none" to="/">
        <ListItem style={{ marginTop: "100px" }} button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <p className="list-item">Log out</p>
        </ListItem>
      </Link>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color="default" position="fixed" className={classes.appBar}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {/* Responsive drawer */}
          </Typography>
          <div className="flex-center">
            <p> Student Name </p>
            <div style={{ width: "5px" }} />
            <img src={ProfileIcon} alt="" height="50px" width="50px" />
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <AiFillCaretDown size="18px" color="#452380" />
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

Sidebar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Sidebar;

// export const DashboardRoutes = (props) => {
//   return (

//       <Switch>
//         <Route exact path="/dashboard/" component={Dashboard} />
//         <Route exact path="/dashboard/not" component={Dashboard} />
//       </Switch>
//   );
// };
