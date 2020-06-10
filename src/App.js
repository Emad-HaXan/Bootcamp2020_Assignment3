import React from 'react';
import Intro from './Intro.js';
import Animal from './Animal';
import './my.css';

function App() 
{
  return (
    <div className="main">
      <h1>This is Bootcamp2020 Assignment 3</h1>
      <Intro />

      <div className="animal">
        <Animal animalName="Cat" animalType="Pet" animalScore={5+4} />

        <Animal animalName="Dog" animalType="Pet" animalScore={10-4} />

        <Animal animalName="Tiger" animalType="Wild" animalScore={3*2+2} />

        <Animal animalName="Elephant" animalType="Wild" animalScore={20/2} />

        <Animal animalName="Kangroo" animalType="Mammal" animalScore={23%6} />

        <Animal animalName="Peacock" animalType="Bird" animalScore={7+1} />

        <Animal animalName="Snake" animalType="Reptile" animalScore={2/1*3-4} />
      </div>

      <div class="profile_link"> 
        <h4>Check My Bootcamp 2020 Profile</h4>
        <a href="http://ammad_bootcamp2020.surge.sh/">Click Here</a>
      </div>
    </div>
  );
}

export default App;
