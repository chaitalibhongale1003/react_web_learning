import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import EditExpense from "../pages/EditExpense";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/edit/:id" element={<EditExpense />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;