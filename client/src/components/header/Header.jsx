import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <div className="container header">
      <div className="row header-row">
        <div className="col col--12 col-large--6 header-col">
          <h2>
            India needs more <br />
            <span className="text--error">Blood</span>
          </h2>
          <p>"Excuses never save a life, Blood donation does.</p>
          <p>"Life is in blood – donate Blood – give life"</p>
          <p>
            "Men can donate safely once in every three months while women can
            donate every four months."
          </p>
          <div className="col col--12">
            <Link className="button" to="/register">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
