import './App.css';
import ExpenseList from "./Components/Expenses/ExpenseList";
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
    const [filterExpenses, setFilterExpenses] = useState(
        DUMMY_EXPENSES.filter(expense => expense.date.getFullYear() === DEFAUTL_YEAR)
    );

    console.log(filterExpenses);

	function appendExpenseDataHandler(expenseData) {
		setExpenses((prevState) => [expenseData, ...prevState]);
	}

    // handlers filter array
    function filterArrayHandler(filterYear) {
        setFilterExpenses(expenses.filter(expense => expense.date.getFullYear() === filterYear));
    }

	return (
		<div>
			<NewExpense onPullExpenseData={appendExpenseDataHandler} />
            <ExpenseList
                expenses={filterExpenses}
                onSelectedYear={DEFAUTL_YEAR}
                onFilterExpenseList={filterArrayHandler}
            />
		</div>
	);
}

export default App;