import { Link } from "react-router-dom";
import nav from "../styles/nav.module.css";

function Navbar() {
  return (
    <div className={`${nav.nav_bar}`}>
      <div className={`${nav.nav}`}>
        <div className="logo">Watcher</div>
        <ul className={`${nav.nav_lists}`}>
          <li className={`${nav.nav_list}`}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`${nav.nav_list} ${nav.netflix}`}>
            <Link to="/netflix">
              <img src="https://www.themoviedb.org/t/p/h30/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"></img>
            </Link>
          </li>
          <li className={`${nav.nav_list}`}>
            <Link to="/disney">
              <img
                src="https://www.themoviedb.org/t/p/h30/uzKjVDmQ1WRMvGBb7UNRE0wTn1H.png"
                className={`${nav.disney}`}
              ></img>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
