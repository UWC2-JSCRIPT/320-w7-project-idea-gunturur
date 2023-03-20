import {auth} from './firebaseConfig';
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import IncomeForm from './IncomeForm';
import {useNavigate} from "react-router-dom";
import container from "react-bootstrap/Container";
import './LoginForm.css'

function LoginForm() {
    // Create the email ad password variables and set the state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSignIn = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then(() => {
                // Signed in
                navigate('./home')
            })
            .catch((error) => {
                setErrorMessage(error.message)
            });
    };
    return (
        <div className="login-form-container">
        <container>
            <div className="login-container">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={handlePasswordChange}/>
                    </Form.Group>
                    {errorMessage  && <div className="text-danger">{errorMessage}</div>}
                    <Button variant="primary" type="submit" onClick={handleSignIn}>
                        Sign in
                    </Button>
                </Form>
            </div>
        </container>
        </div>
    );
}

export default LoginForm;

