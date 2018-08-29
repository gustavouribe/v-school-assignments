import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const human = {
    firstName: "Sarah",
    lastName: "Smith",
    age: "30",
    address: "whatever..."
}

const cat = {
    name: "Meowsers"
}

const favoriteThings = ["Whiskers on kittens", "Blue satin sashes", "Warm wollen mittens"]

// ReactDOM.render(<App clownShoes={favoriteThings} person={human} animal={cat}/>, document.getElementById('root'))

ReactDOM.render(<App/>, document.getElementById('root'))