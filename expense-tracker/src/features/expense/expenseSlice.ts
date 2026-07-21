import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type {
  Expense,
  ExpenseState,
} from "./types";

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",

  initialState,

  reducers: {
    addExpense: (
      state,
      action: PayloadAction<Expense>
    ) => {
      state.expenses.push(action.payload);
    },

    deleteExpense: (
      state,
      action: PayloadAction<string>
    ) => {
      state.expenses = state.expenses.filter(
        (expense) =>
          expense.id !== action.payload
      );
    },

    updateExpense: (
      state,
      action: PayloadAction<Expense>
    ) => {
      const index = state.expenses.findIndex(
        (expense) =>
          expense.id === action.payload.id
      );

      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
  },
});

export const {
  addExpense,
  deleteExpense,
  updateExpense,
} = expenseSlice.actions;

export default expenseSlice.reducer;