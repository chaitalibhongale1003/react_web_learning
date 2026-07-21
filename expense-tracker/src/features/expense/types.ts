/**
 * Expense Model
 *
 * Represents a single expense entry.
 */
export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: string;
  date: string;
}

/**
 * Redux State
 */
export interface ExpenseState {
  expenses: Expense[];
}