import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
    return (
        <div className="person">
        <h1>{props.name}</h1>
        <p>Your Age:{props.age}</p>
    </div>   
    );
}

var app = (
    <div>
        <Person name="Joshua" age= "31" />
        <Person name="Amber" age= "28" />
    </div>
);

ReactDOM.render(app, 
    document.querySelector('#app'));

