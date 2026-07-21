import { useParams } from "react-router-dom";

const EditExpense = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Edit Expense</h1>

      <p>ID : {id}</p>
    </div>
  );
};

export default EditExpense;