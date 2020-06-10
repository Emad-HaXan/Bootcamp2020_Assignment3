import React from 'react';
import './animal.css';

function Animal (props)
{
    return(
        <div className="card">
            <h4>Animal Name:</h4>
            <p>{props.animalName}</p>
            <h4>Animal Type:</h4>
            <p>{props.animalType}</p>
            <h4>Liking Rate from 1 to 10</h4>
            <p>{props.animalScore}</p>
        </div>
    );
}

export default Animal;