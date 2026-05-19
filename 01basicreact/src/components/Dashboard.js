import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div style={styles.container}>

      <h1>Dashboard Page</h1>

      <div style={styles.menu}>

        <Link style={styles.link} to="profile">
          Profile
        </Link>

        <Link style={styles.link} to="settings">
          Settings
        </Link>

      </div>

      <hr />

      {/* Child Routes */}
      <Outlet />

    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
  },

  menu: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },

  link: {
    textDecoration: "none",
    color: "blue",
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default Dashboard;