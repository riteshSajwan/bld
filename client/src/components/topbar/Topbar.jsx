import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="appbar">
      <Link className="appbar-title" to="/">
        DonateIndia
      </Link>
      <div className="appbar-content">
        <Link className="appbar-item" to="/">
          <span>Home</span>
        </Link>
        <Link className="appbar-item" to="/about">
          <span>About</span>
        </Link>
        <Link className="appbar-item" to="/contact">
          <span>Contact</span>
        </Link>
        <Link className="appbar-item" to="/getusers">
          <span>Blood Groups</span>
        </Link>
        <Link className="appbar-item" to="/register">
          <span>Register</span>
        </Link>
      </div>
    </div>
  );
}
