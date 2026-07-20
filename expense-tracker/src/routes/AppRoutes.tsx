import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import AddExpense from "../pages/AddExpense";
import EditExpense from "../pages/EditExpense";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/edit/:id" element={<EditExpense />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;