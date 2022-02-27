import React, { useState, useEffect } from 'react';
import TinderCard from "react-tinder-card";
import "../Style/TinderCards.css";
import axios from './axios';

function TinderCards() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
      async function fetchData() {
          const req = await axios.get("/tinder/cards");

          setPeople(req.data);
      }
    
      fetchData();
    }, []);
    

    function Swiped(direction, nameToDelete) {
        console.log('removing: ' + nameToDelete);
        // setLastDirection(direction);
    }
      
      const outOfFrame = (myIdentifier) => {
        console.log(myIdentifier + ' left the screen')
      }

    return <div className='Tinder-cards'>
        <div className='tinderCards__container'>
            {people.map((person)=> (
                <TinderCard
                    className='swipe'
                    key={person.name}
                    preventSwipe={['up', 'down']}
                    onSwipe={(dir) => Swiped(dir, person.name)}
                    onCardLeftScreen={() => outOfFrame(person.name)}
                >
                    <div style={{backgroundImage: `url(${person.imgUrl})`}} className='card'>
                        <h3>{person.name}</h3>

                    </div>

                </TinderCard>
            ))}
        </div>
        
    </div>;
}

export default TinderCards;