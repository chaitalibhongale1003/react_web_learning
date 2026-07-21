import { v4 as uuid } from "uuid";
import { useNavigate } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm/ExpenseForm";

import type { ExpenseFormData } from "../components/ExpenseForm/validation";

import { addExpense } from "../features/expense/expenseSlice";

import { ROUTES } from "../constants/routes";

import { useAppDispatch } from "../app/hooks";

const AddExpense = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleAddExpense = (
    data: ExpenseFormData
  ) => {
    dispatch(
      addExpense({
        id: uuid(),
        ...data,
      })
    );

    navigate(ROUTES.HOME);
  };

  return (
    <>
      <h1>Add Expense</h1>

      <ExpenseForm
        onSubmit={handleAddExpense}
      />
    </>
  );
};

export default AddExpense;