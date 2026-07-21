import type { RootState } from "../../app/store";

export const selectExpenses = (
  state: RootState
) => state.expense.expenses;

export const selectTotalExpenses = (
  state: RootState
) =>
  state.expense.expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

export const selectTransactionCount = (
  state: RootState
) => state.expense.expenses.length;