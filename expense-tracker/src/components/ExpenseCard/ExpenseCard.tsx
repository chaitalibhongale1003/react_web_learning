import type { Expense } from "../../features/expense/types";

interface ExpenseCardProps {
    expense: Expense;
}

const ExpenseCard = ({ expense }: ExpenseCardProps) => {

    return (

        <div>

            <h3>{expense.title}</h3>

            <p>{expense.category}</p>

            <p>₹ {expense.amount}</p>

            <p>{expense.date}</p>

        </div>

    );

};

export default ExpenseCard;