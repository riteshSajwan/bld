// import { useEffect, useState } from "react";
// import axios from "axios";
import "./sidebar.css"
import { Link } from "react-router-dom";

export default function Sidebar() {

    return (
        <div className="sidebar">
            <div className="siderbarItem">
                <span className="sidebarTitle">Blood</span>
                <img src="https://th.bing.com/th/id/OIP.BltcJ5K03KIEjAZQRLbw-gHaCq?w=342&h=125&c=7&o=5&dpr=1.25&pid=1.7" width="350px" height="auto" alt="img" />
                <p >Register yourself just to help others to find blood for their loved ones
                </p>
            </div>
            <div className="siderbarItem">
                <span className="sidebarTitle">Group</span>
                <ul className="sidebarList">
                   
                        {/* <Link to={`/?cat=${c.name}`} className="link"> */}
                        <Link to="#" className="link">
                            <li className="siderbarListItems">A</li>
                        </Link>
                        <Link to="#" className="link">
                            <li className="siderbarListItems">B</li>
                        </Link>
                        <Link to="#" className="link">
                            <li className="siderbarListItems">AB</li>
                        </Link>
                        <Link to="#" className="link">
                            <li className="siderbarListItems">O</li>
                        </Link>                                           
                </ul>
            </div>
            <div className="siderbarItem">
                <span className="sidebarTitle">Follow US</span>
                <div className="sidebarSocial">
                    <i className="sidebarIcon fab fa-facebook-square"></i>
                    <i className="sidebarIcon fab fa-twitter-square"></i>
                    <i className="sidebarIcon fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
