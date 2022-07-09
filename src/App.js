import './App.css';
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";

import { useState } from "react";

const DUMMY_EXPENSES = [
    {
        id: Math.random().toString(),
        title: "Car EMI",
        amount: Math.floor((Math.random() * 1000) + 2000),
        date: new Date()
    },
    {
        id: Math.random().toString(),
        title: "Grocery",
        amount: Math.ceil((Math.random() * 1000) + 500),
        date: new Date()
    },
    {
        id: Math.random().toString(),
        title: "Rent",
        amount: Math.ceil((Math.random() * 1000) + 5000),
        date: new Date("2020-10-08")
    }
];

const DEFAUTL_YEAR = 2022;

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    // append expenses array
	function appendExpenseDataHandler(expenseData) {
		setExpenses((prevState) => [expenseData, ...prevState]);
	}

	return (
		<div>
			<NewExpense onPullExpenseData={appendExpenseDataHandler} />
            <Expenses
                expenses={expenses}
                onSelectedYear={DEFAUTL_YEAR}
            />
		</div>
	);
}

export default App;