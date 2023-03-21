import React, {useState, useEffect} from "react";
import {db}  from  './firebaseConfig'
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function Visualization() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    // Get the data from firebase
    useEffect(()=> {
        const fetchData = async () => {
            const response = await db.collection('expenses').get()
            const data = response.docs.map((doc)=>doc.data())
            setData(data)
        }
        fetchData()
    },[]);

    return(
        <div>
            <h1>Expenses</h1>
            {/*Iterate over the expenses*/}
            {data.map((expense)=>(
                    <div key={expense.id}>
                        <h3>{expense.type}</h3>
                        <p>{expense.amount}</p>
                        <p>{expense.date}</p>
                    </div>
                )
            )}
            <Container>
                <Form>
                    <Row>
                        <Col>
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
        </div>

    )
}

export default Visualization;
