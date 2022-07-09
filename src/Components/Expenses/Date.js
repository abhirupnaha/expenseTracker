import './Date.css';
import Card from '../UI/Card'

function Date(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'});
    const day = props.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.date.getFullYear();

    return (
        <Card identifier="expense-date">
            <div className="expense-date__month"> {month} </div>
            <div className="expense-date__day"> {day} </div>
            <div className="expense-date__year"> {year} </div>
        </Card>
    );
}

export default Date;