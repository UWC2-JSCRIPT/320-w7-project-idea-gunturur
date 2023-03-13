import { useState } from 'react';
import { db } from './firebaseConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import IncomeForm from "./IncomeForm";
import {useNavigate} from "react-router-dom";

function ExpensesForm(){

    const [expense, setExpense] = useState({
        type: '',
        amount: '',
        date: '',
    });

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setExpense((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        db.collection('expenses').add(expense);
        setExpense({ type: '', amount: '', date: '' });
    };

    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="type">
                <Form.Label>Expense</Form.Label>
                <Form.Control
                    type="text"
                    name="type"
                    value={expense.type}
                    onChange={handleInputChange}
                    placeholder="Enter type of expense"
                />
            </Form.Group>

            <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    name="amount"
                    value={expense.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
                />
            </Form.Group>

            <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                    type="date"
                    name="date"
                    value={expense.date}
                    onChange={handleInputChange}
                    placeholder="Enter date of expense"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Button variant="primary" type="submit" onClick={() => navigate('/home')}>
                Home
            </Button>
        </Form>
    );
}

export default ExpensesForm;
