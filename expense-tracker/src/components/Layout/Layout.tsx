import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;