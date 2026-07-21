import { Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";

import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import EditExpense from "../pages/EditExpense";

import { ROUTES } from "../constants/routes";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path={ROUTES.HOME}
          element={<Dashboard />}
        />

        <Route
          path={ROUTES.ADD_EXPENSE}
          element={<AddExpense />}
        />

        <Route
          path={ROUTES.EDIT_EXPENSE}
          element={<EditExpense />}
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;