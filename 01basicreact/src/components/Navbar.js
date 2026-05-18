import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>

      <h2 style={styles.logo}>React Website</h2>

      <div style={styles.menu}>

        <Link style={styles.link} to="/">
          Home
        </Link>

        <Link style={styles.link} to="/about">
          About
        </Link>

        <Link style={styles.link} to="/contact">
          Contact
        </Link>

      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#222",
    padding: "10px 25px",
  },

  logo: {
    color: "white",
  },

  menu: {
    display: "flex",
    gap: "20px",
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;