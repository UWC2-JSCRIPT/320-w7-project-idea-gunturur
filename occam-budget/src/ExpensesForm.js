import {useState} from 'react';
import {db} from './firebaseConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ExpensesForm() {

    const [expense, setExpense] = useState({
        type: '',
        amount: '',
        date: '',
    });

    const navigate = useNavigate()

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setExpense((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        db.collection('expenses').add(expense);
        setExpense({type: '', amount: '', date: ''});
    };

    return (
        <Container className="d-flex justify-content-evenly align-items-center" style={{ minHeight: "100vh" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="type">
                    <Row>
                        <Col>
                            <Form.Label style={{width: '50%'}}>Expense</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                type="text"
                                name="type"
                                value={expense.type}
                                onChange={handleInputChange}
                                placeholder="Enter type of expense"
                                style={{width: '50%'}}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="amount">
                    <Row>
                        <Col>
                            <Form.Label>Amount</Form.Label>
                        </Col>
                        <Col>

                            <Form.Control
                                type="number"
                                name="amount"
                                value={expense.amount}
                                onChange={handleInputChange}
                                placeholder="Enter amount"
                                style={{width: '50%'}}
                            />
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group controlId="date">
                    <Row>
                        <Col>
                            <Form.Label>Date</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control
                                type="date"
                                name="date"
                                value={expense.date}
                                onChange={handleInputChange}
                                placeholder="Enter date of expense"
                                style={{width: '50%'}}
                            />
                        </Col>
                    </Row>
                </Form.Group>


                <Row>
                    <Col md={{span: 1, offset: 2}}> <Button variant="primary" type="submit"
                                                            onClick={() => navigate('/home')}>
                        Home
                    </Button></Col>
                    <Col md={{span: 1, offset: 2}}> <Button variant="primary" type="submit">
                        Submit
                    </Button></Col>
                </Row>

            </Form>
        </Container>
    );
}

export default ExpensesForm;
