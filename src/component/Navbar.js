import { Link, useMatch, useResolvedPath } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DateRangeIcon from "@mui/icons-material/DateRange";
import Diversity1Icon from "@mui/icons-material/Diversity1";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Navbar() {
  return (
    <div className="leftContainer">
      <nav className="nav">
        <Link to="/" className="appName">
          Application Name
        </Link>
        <ul>
          <CustomeLink to="/">
            <HomeIcon className="icon" />
            Dashboard
          </CustomeLink>
          <CustomeLink to="/schedule">
            <DateRangeIcon className="icon" />
            Schedule
          </CustomeLink>

          <CustomeLink to="/friends">
            <Diversity1Icon className="icon" />
            Friends
          </CustomeLink>
          <CustomeLink to="/tasks">
            <ListAltIcon className="icon" />
            Tasks
          </CustomeLink>
          <CustomeLink to="/account">
            <AccountCircleIcon className="icon" />
            Account
          </CustomeLink>
        </ul>
      </nav>
    </div>
  );

  function CustomeLink({ to, children, ...props }) {
    // const path = window.location.pathname;
    //allow to take a relative or absolute path combines witgh current path
    //you're on, and gives actual full path
    const resolvePath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvePath.pathname, end: true });
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
  }
}