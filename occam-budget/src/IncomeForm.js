import { useState } from 'react';
import { db } from './firebaseConfig';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function IncomeForm() {
    const [income, setIncome] = useState({
        source: '',
        amount: '',
    });

    const navigate = useNavigate();

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
        <Container>
            <Form onSubmit={handleSubmit}>
                <Row>
                    <Col>
                        <Form.Group controlId="source">
                            <Form.Label>Source of Income</Form.Label>
                            <Form.Control
                                type="text"
                                name="source"
                                value={income.source}
                                onChange={handleInputChange}
                                style={{ width: '100%' }}
                                placeholder="Enter source of income"
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Col>
                    <Col>
                        <Form.Group controlId="amount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control
                                type="number"
                                name="amount"
                                value={income.amount}
                                onChange={handleInputChange}
                                style={{ width: '100%' }}
                                placeholder="Enter amount"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={() => navigate('/home')}
                            className="ml-2"
                        >
                            Home
                        </Button>
                    </Col>

                </Row>
            </Form>
        </Container>
    );
}

export default IncomeForm;
