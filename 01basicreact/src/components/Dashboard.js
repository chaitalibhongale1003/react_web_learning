import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>

      <h1>Dashboard Page</h1>

      <nav>
        <Link to="profile">Profile</Link>

        <br />

        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Child page shows here */}
      <Outlet />

    </div>
  );
}

export default Dashboard;