import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { expenseSchema } from "./validation";
import type { ExpenseFormData } from "./validation";

import styles from "./ExpenseForm.module.css";

interface ExpenseFormProps {
  initialValues?: ExpenseFormData;
  onSubmit: (data: ExpenseFormData) => void;
}

const categories = [
  "Food",
  "Shopping",
  "Travel",
  "Bills",
  "Medical",
  "Fuel",
  "Entertainment",
  "Others",
];

const ExpenseForm = ({
  initialValues,
  onSubmit,
}: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: initialValues ?? {
      title: "",
      amount: 0,
      category: "",
      date: "",
    },
  });

  const handleFormSubmit = (data: ExpenseFormData) => {
    onSubmit(data);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <div>
        <label>Title</label>

        <input
          type="text"
          placeholder="Enter expense title"
          {...register("title")}
        />

        {errors.title && (
          <p className={styles.error}>{errors.title.message}</p>
        )}
      </div>

      <div>
        <label>Amount</label>

        <input
          type="number"
          placeholder="Enter amount"
          {...register("amount", {
            valueAsNumber: true,
          })}
        />

        {errors.amount && (
          <p className={styles.error}>{errors.amount.message}</p>
        )}
      </div>

      <div>
        <label>Category</label>

        <select {...register("category")}>
          <option value="">Select Category</option>

          {categories.map((category) => (
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

      <div>
        <label>Date</label>

        <input
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
        Save Expense
      </button>
    </form>
  );
};

export default ExpenseForm;