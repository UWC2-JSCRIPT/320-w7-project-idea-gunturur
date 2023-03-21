import './App.css';
import LoginForm from "./LoginForm";
import 'firebase/auth';
import 'firebase/firestore';
import IncomeForm from "./IncomeForm";
import ExpensesForm from "./ExpensesForm";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./HomePage";
import Visualization from "./Visualization";

function App() {
  return (
    <div className="App">
        {/*Links to different forms*/}
        <Router>
            <Routes>
                <Route exact path="/login" element={<LoginForm/>}/>
                <Route path="home" element={<HomePage/>}/>
                <Route path="income" element={<IncomeForm/>}/>
                <Route path="expense" element={<ExpensesForm/>}/>
                <Route path="visual" element={<Visualization/>}/>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
