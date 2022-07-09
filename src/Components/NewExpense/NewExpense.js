import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {  
    const [formToggle, setFormToggle] = useState(false)
    
    function saveExpenseData(expenseData) {
        expenseData = {
            ...expenseData,
            id: Math.random().toString()
        }

        props.onPullExpenseData({
            ...expenseData,
            amount: parseInt(expenseData.amount)
        });
    }
    
    function formToggleHandler(event) {
        event.preventDefault();
        setFormToggle(prevState => !prevState);
    }

    return (
        <div className="new-expense">
            {
                !formToggle
                &&
                <button onClick={formToggleHandler}> Add Expense </button>
            }
            {
                formToggle
                &&
                <ExpenseForm
                    onSaveExpenseData={saveExpenseData}
                    onCancel={formToggleHandler}
                />
            }
        </div>
    );
}

export default NewExpense;