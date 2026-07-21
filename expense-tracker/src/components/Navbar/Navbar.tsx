import { NavLink } from "react-router-dom";

import { NAVIGATION_ITEMS } from "../../constants/navigation";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        💰 Expense Tracker
      </div>

      <nav>
        <ul className={styles.navList}>
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? styles.activeLink
                    : styles.link
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;