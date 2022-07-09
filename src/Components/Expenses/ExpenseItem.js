import Card from "../UI/Card";
import Date from "./Date";
import "./ExpenseItem.css";

function ExpenseItem(props) {
    return (
        <li>
            <Card identifier="expense-item">
                <Date date={props.expense.date}></Date>
                <div className="expense-item__description">
                    <h2> {props.expense.title} </h2>
                    <div className="expense-item__price">
                        {props.expense.amount}
                    </div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;