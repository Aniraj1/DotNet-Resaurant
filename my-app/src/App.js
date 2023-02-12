import React, { useEffect, useState } from 'react';
import './App.css';
import { fetchTodos } from './UI/Api';


function App() {
    const [Res, setRes] = useState([]);
    // const getQuote = () => {

    // }
    // Component_Did_Mount() // ==============To fetch all data from data base==============
   const getRes  = () => {
        fetchTodos().then((Res) => {
            console.log(Res);
            setRes(Res);
            // setToDoList(todoList);
        });
    };
    return (
        <div className='App'>
            <button onClick={getRes}>Click</button>
            {/* <ul>
                <li>{Res}</li><br/>
            </ul> */}
        </div>
    );
}

export default App;