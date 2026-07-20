import { createSlice } from "@reduxjs/toolkit";
import type { Expense } from "./types";

interface ExpenseState {
  expenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {},
});

export default expenseSlice.reducer;