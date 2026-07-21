import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { expenseSchema } from "./validation";
import type { ExpenseFormData } from "./validation";

import styles from "./ExpenseForm.module.css";

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

const ExpenseForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),
    defaultValues: {
      title: "",
      amount: 0,
      category: "",
      date: "",
    },
  });

  const onSubmit = (data: ExpenseFormData) => {
    console.log(data);
  };

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div>
        <label>Title</label>

        <input
          type="text"
          {...register("title")}
        />

        <p>{errors.title?.message}</p>
      </div>

      <div>
        <label>Amount</label>

        <input
          type="number"
          {...register("amount", {
            valueAsNumber: true,
          })}
        />

        <p>{errors.amount?.message}</p>
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

        <p>{errors.category?.message}</p>
      </div>

      <div>
        <label>Date</label>

        <input
          type="date"
          {...register("date")}
        />

        <p>{errors.date?.message}</p>
      </div>

      <button type="submit">
        Save Expense
      </button>
    </form>
  );
};

export default ExpenseForm;