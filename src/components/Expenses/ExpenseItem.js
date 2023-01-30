import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "./Chart/NewExpense/UI/Card";
import React from "react";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);
  // console.log("ExpenseItem evaluated by React");

  // const clickHandler = () => {
  //   setTitle("updated!");
  //   console.log(title);
  // };

  //<div>{props.date.toISOString()}</div>
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
