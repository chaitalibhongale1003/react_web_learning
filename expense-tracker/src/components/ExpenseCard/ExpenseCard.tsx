import type { Expense } from "../../features/expense/types";

import styles from "./ExpenseCard.module.css";

interface ExpenseCardProps {
  expense: Expense;
  onDelete: (id: string) => void;
}

const ExpenseCard = ({
  expense,
  onDelete,
}: ExpenseCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <h3 className={styles.title}>
          {expense.title}
        </h3>

        <p className={styles.category}>
          {expense.category}
        </p>

        <p className={styles.date}>
          {expense.date}
        </p>
      </div>

      <div className={styles.right}>
        <h2 className={styles.amount}>
          ₹ {expense.amount}
        </h2>

        <button
          className={styles.deleteButton}
          onClick={() => onDelete(expense.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;