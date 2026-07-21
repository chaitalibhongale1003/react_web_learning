import SummaryCard from "../components/SummaryCard/SummaryCard";
import EmptyState from "../components/EmptyState/EmptyState";

import { useAppSelector } from "../app/hooks";

import {
  selectExpenses,
  selectTotalExpenses,
  selectTransactionCount,
} from "../features/expense/selectors";

import styles from "./Dashboard.module.css";

const Dashboard = () => {

  const expenses =
    useAppSelector(selectExpenses);

  const totalExpense =
    useAppSelector(selectTotalExpenses);

  const transactionCount =
    useAppSelector(selectTransactionCount);

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

        <p>Expense List Coming in Part 6...</p>

      )}

    </div>
  );
};

export default Dashboard;