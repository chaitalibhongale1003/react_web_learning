import { useParams } from "react-router-dom";

const EditExpense = () => {
  const { id } = useParams();

  return (
    <>
      <h1>Edit Expense</h1>

      <p>Expense ID: {id}</p>
    </>
  );
};

export default EditExpense;