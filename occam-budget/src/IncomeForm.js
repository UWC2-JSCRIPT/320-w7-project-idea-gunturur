import { useState } from 'react';
import { db } from './firebaseConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";

function IncomeForm() {
    const [income, setIncome] = useState({
        source: '',
        amount: '',
    });

    const navigate = useNavigate()
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setIncome((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        db.collection('income').add(income);
        setIncome({ source: '', amount: '' });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="source">
                <Form.Label>Source of Income</Form.Label>
                <Form.Control
                    type="text"
                    name="source"
                    value={income.source}
                    onChange={handleInputChange}
                    placeholder="Enter source of income"
                />
            </Form.Group>

            <Form.Group controlId="amount">
                <Form.Label>Amount</Form.Label>
                <Form.Control
                    type="number"
                    name="amount"
                    value={income.amount}
                    onChange={handleInputChange}
                    placeholder="Enter amount"
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

export default IncomeForm;
