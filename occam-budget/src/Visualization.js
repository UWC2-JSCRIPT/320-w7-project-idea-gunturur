import React, {useState, useEffect} from "react";
import {db}  from  './firebaseConfig'

function Visualization() {
    const [data, setData] = useState([])

    // Get the data from firebase
    useEffect(()=> {
        const fetchData = async () => {
            const response = await db.collection('expenses').get()
            const data = response.docs.map((doc)=>doc.data())
            setData(data)
        }
        fetchData()
    },[])

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
        </div>
    )
}

export default Visualization
