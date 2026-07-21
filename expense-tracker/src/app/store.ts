import { configureStore } from "@reduxjs/toolkit";

import expenseReducer from "../features/expense/expenseSlice";

export const store = configureStore({
  reducer: {
    expense: expenseReducer,
  },
});

/**
 * RootState
 *
 * Represents the complete Redux state tree.
 * Used with useSelector().
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * AppDispatch
 *
 * Represents the Redux dispatch function.
 * Used with useDispatch().
 */
export type AppDispatch = typeof store.dispatch;