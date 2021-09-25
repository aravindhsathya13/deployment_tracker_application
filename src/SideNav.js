import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { Link } from "react-router-dom";
import "./SideNav.css";

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

function SideNav() {
  return (
    <>
      <nav className={"nav-menu active"}>
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <h1 className="title">Deployment Tracker</h1>
          </li>

          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                {/* <Link to={item.path}> */}
                {item.icon}
                <span>{item.title}</span>
                {/* </Link> */}
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
export default SideNav;
