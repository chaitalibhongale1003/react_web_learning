import SummaryCard from "../components/SummaryCard/SummaryCard";
import ExpenseCard from "../components/ExpenseCard/ExpenseCard";
import EmptyState from "../components/EmptyState/EmptyState";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";

import {
  selectExpenses,
  selectTotalExpenses,
  selectTransactionCount,
} from "../features/expense/selectors";

import { deleteExpense } from "../features/expense/expenseSlice";

import { useAppDispatch, useAppSelector } from "../app/hooks";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const expenses =
    useAppSelector(selectExpenses);

  const totalExpense =
    useAppSelector(selectTotalExpenses);

  const transactionCount =
    useAppSelector(selectTransactionCount);
    
  const handleEditExpense = (id: string) => {
  navigate(`/edit/${id}`);
   };

  const handleDeleteExpense = (
    id: string
  ) => {
    dispatch(deleteExpense(id));
  };

  return (
    <div className={styles.container}>
      <h1>Dashboard</h1>

      <div className={styles.grid}>
        <SummaryCard
          title="Total Expense"
          value={`₹ ${totalExpense}`}
        />

        <SummaryCard
          title="Transactions"
          value={transactionCount}
        />
      </div>

      {expenses.length === 0 ? (
        <EmptyState
          title="No Expenses Yet"
          description="Click Add Expense to create your first expense."
        />
      ) : (
        <div className={styles.list}>
          {expenses.map((expense) => (
            <ExpenseCard
              key={expense.id}
              expense={expense}
              onEdit={handleEditExpense}
              onDelete={
                handleDeleteExpense
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;