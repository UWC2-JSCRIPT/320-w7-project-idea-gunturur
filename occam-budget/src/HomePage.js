import { Link } from "react-router-dom"

function HomePage() {
    return(
      <div>
          <h1> Welcome to the budget tracker</h1>
          <p>Choose an option:</p>
          <ul>
              <li>
                  <Link to="/income">Income</Link>
              </li>
              <li>
                  <Link to="/expense">Expense</Link>
              </li>
              <li>
                  <Link to="/visual">Display Data</Link>
              </li>
          </ul>
      </div>
    );
}

export default HomePage
