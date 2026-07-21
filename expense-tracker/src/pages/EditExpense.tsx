import { useNavigate, useParams } from "react-router-dom";

import ExpenseForm from "../components/ExpenseForm/ExpenseForm";

import type { ExpenseFormData } from "../components/ExpenseForm/validation";

import {
  updateExpense,
} from "../features/expense/expenseSlice";

import {
  selectExpenseById,
} from "../features/expense/selectors";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import { ROUTES } from "../constants/routes";

const EditExpense = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const expense = useAppSelector((state) =>
    selectExpenseById(state, id ?? "")
  );

  if (!expense) {
    return <h2>Expense not found.</h2>;
  }

  const handleUpdateExpense = (
    data: ExpenseFormData
  ) => {
    dispatch(
      updateExpense({
        id: expense.id,
        ...data,
      })
    );

    navigate(ROUTES.HOME);
  };

  return (
    <>
      <h1>Edit Expense</h1>

      <ExpenseForm
        initialValues={{
          title: expense.title,
          amount: expense.amount,
          category: expense.category,
          date: expense.date,
        }}
        submitButtonText="Update Expense"
        onSubmit={handleUpdateExpense}
      />
    </>
  );
};

export default EditExpense;