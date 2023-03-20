import {Link} from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomePage() {
    return (

        <Container>
            <Row className="justify-content-center align-items-center" style={{height: '100vh'}}>
            <Row className="justify-content-center">
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Income</Card.Title>
                            <Card.Text>
                                Record your income to track your budget
                            </Card.Text>
                            <Link to="/income" className="btn btn-primary">Go to Income</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Expense</Card.Title>
                            <Card.Text>
                                Record your expenses to track your budget
                            </Card.Text>
                            <Link to="/expense" className="btn btn-primary">Go to Expense</Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Display Data</Card.Title>
                            <Card.Text>
                                Visualize your budget data with charts
                            </Card.Text>
                            <Link to="/visual" className="btn btn-primary">Go to Data Visualization</Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </Row>
        </Container>
)
    ;
}

export default HomePage
