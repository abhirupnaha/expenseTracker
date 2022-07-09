import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

export default function ExpenseList(props) {
    if(props.items.length === 0)
        return (
            <h3 className="expenses-list__fallback">
                No expense found.
            </h3>
        );

    return (
        <ul className="expense-list">
            {
                props.items.map( element => (
                    <ExpenseItem
                        key={element.id}
                        expense={element}
                    />
                ))
            }
        </ul>
    );
}