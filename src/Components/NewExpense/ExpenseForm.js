import {useState} from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    // function titleChangeHandler(event) {
    //     setTitle(event.target.value);
    //     console.log(title);
    // }

    // function amountChangeHandler(event) {
    //     setAmount(event.target.value);
    //     console.log(amount);
    // }

    // function dateChangeHandler(event) {
    //     setDate(event.target.value);
    //     console.log(date);
    // }

    const [form, setForm] = useState({
        title: '',
        amount: '',
        date: ''
    })

    function titleChangeHandler(event) {
        setForm((prevState) => {
            return {
                ...prevState,
                title: event.target.value
            }
        });
    }

    function amountChangeHandler(event) {
        setForm((prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            }
        });
    }

    function dateChangeHandler(event) {
        setForm((prevState) => {
            return {
                ...prevState,
                date: event.target.value
            }
        });
    }

    function submitHandler(event) {
        event.preventDefault(); //when onSubmit is in form is triggered by default it reload the page.
        
        const expenseData = {
            ...form,
            date: new Date(form.date)
        };
        props.onSaveExpenseData(expenseData);

        setForm({
            title: '',
            amount: '',
            date: ''
        });

        // console.log(expenseData);
    }

    return (
        // onSubmit is trigged when button of type="submit" is clicked
        <form action="#" onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label> Title</label>
                    <input type="text" required onChange={titleChangeHandler} value={form.title}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor=""> Amount </label>
                    <input type="number" required min="1" step="1" onChange={amountChangeHandler} value={form.amount}/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor=""> Date </label>
                    <input type="date" required min="2020-06-03" max="2024-06-03" onChange={dateChangeHandler} value={form.date}/>
                </div>
                <div className="new-expense__actions">
                    <button type="submit"> Add Expense </button>
                </div>
            </div>
        </form>
    );
}

export default ExpenseForm;