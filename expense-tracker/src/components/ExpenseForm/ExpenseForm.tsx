import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EXPENSE_CATEGORIES } from "../../constants/categories";

import { expenseSchema } from "./validation";
import type { ExpenseFormData } from "./validation";

import styles from "./ExpenseForm.module.css";

export interface ExpenseFormProps {
  initialValues?: ExpenseFormData;
  submitButtonText?: string;
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({
  initialValues,
  submitButtonText = "Save Expense",
  onSubmit,
}: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),

    defaultValues:
      initialValues ?? {
        title: "",
        amount: 0,
        category: "",
        date: "",
      },
  });

  const handleFormSubmit = (
    data: ExpenseFormData
  ) => {
    onSubmit(data);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      {/* Title */}

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Title
        </label>

        <input
          className={styles.input}
          type="text"
          placeholder="Enter expense title"
          {...register("title")}
        />

        {errors.title && (
          <p className={styles.error}>
            {errors.title.message}
          </p>
        )}
      </div>

      {/* Amount */}

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Amount
        </label>

        <input
          className={styles.input}
          type="number"
          placeholder="Enter amount"
          {...register("amount", {
            valueAsNumber: true,
          })}
        />

        {errors.amount && (
          <p className={styles.error}>
            {errors.amount.message}
          </p>
        )}
      </div>

      {/* Category */}

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Category
        </label>

        <select
          className={styles.select}
          {...register("category")}
        >
          <option value="">
            Select Category
          </option>

          {EXPENSE_CATEGORIES.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className={styles.error}>
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Date */}

      <div className={styles.formGroup}>
        <label className={styles.label}>
          Date
        </label>

        <input
          className={styles.input}
          type="date"
          {...register("date")}
        />

        {errors.date && (
          <p className={styles.error}>
            {errors.date.message}
          </p>
        )}
      </div>

      <button
        className={styles.button}
        type="submit"
      >
        {submitButtonText}
      </button>
    </form>
  );
};

export default ExpenseForm;