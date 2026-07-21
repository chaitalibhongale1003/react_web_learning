import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>💰 Expense Tracker</h2>

      <div className={styles.links}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/add"
          className={({ isActive }) =>
            isActive ? styles.activeLink : styles.link
          }
        >
          Add Expense
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;