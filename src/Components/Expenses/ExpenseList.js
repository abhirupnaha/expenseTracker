import { useState } from "react";

import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

function ExpenseList(props) {
    const [filter, setFilter] = useState(props.onSelectedYear.toString());

    function changeFilterHandler(filterYear) {
        setFilter(filterYear);
        props.onFilterExpenseList(parseInt(filterYear));
    }

    return (
        <Card identifier="expenses">
            <ExpenseFilter selected={filter} onChangeFilter={changeFilterHandler} />

            {/* conditional rendering */}
            {props.expenses.map(element =>
                <ExpenseItem
                    key={element.id}
                    expense={element}
                />
            )}

            {/* <ExpenseItem expense={props.expenses[0]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[1]}></ExpenseItem>
            <ExpenseItem expense={props.expenses[2]}></ExpenseItem> */}
        </Card>
    );
}

export default ExpenseList;