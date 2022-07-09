import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {    
    function saveExpenseData(expenseData) {
        expenseData = {
            ...expenseData,
            id: Math.random().toString()
        }
        console.log("from NewExpense ",expenseData);

        props.onPullExpenseData({
            ...expenseData,
            id: Math.random(),
            amount: parseInt(expenseData.amount)
        });
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseData}/>
        </div>
    );
}

export default NewExpense;