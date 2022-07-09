import "./Card.css";

function Card(props) {
    const identifier = "card " + props.identifier;

    return (
        <div className={identifier}>
            {props.children}
        </div>
    );
}

export default Card;