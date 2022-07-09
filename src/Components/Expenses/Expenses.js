import { useState } from "react";

import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
    const [filterYear, setFilterYear] = useState(props.onSelectedYear.toString());

    const filterExpenses = props.expenses.filter( expense => expense.date.getFullYear().toString() === filterYear);

    function changeFilterHandler(filterYear) {
        setFilterYear(filterYear);
    }

    return (
        <Card identifier="expenses">
            <ExpenseFilter selected={filterYear} onChangeFilter={changeFilterHandler} />
            <ExpenseList items={filterExpenses} />

            {/* conditional rendering */}
            {/* {
                // if filterExpenses is empty
                (filterExpenses.length === 0)
                &&
                <p> No expenses </p>
            }

            {
                // if filterExpenses is not empty
                (filterExpenses.length > 0)
                &&
                filterExpenses.map(element =>
                    <ExpenseItem
                        key={element.id}
                        expense={element}
                    />
                )
            } */}

            {/* <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[2]}></ExpenseItem> */}
        </Card>
    );
}

export default Expenses;