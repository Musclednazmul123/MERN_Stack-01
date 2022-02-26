import React, { useState } from 'react';
import TinderCard from "react-tinder-card";
import "../Style/TinderCards.css";

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        },
        {
            name: 'Jeff Bezozs',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        },

        {
            name: 'Mahtab Alam',
            url: 'https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg',
        },
    ]);

    const Swiped = (direction, nameToDelete) => {
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
                    <div style={{backgroundImage: `url(${person.url})`}} className='card'>
                        <h3>{person.name}</h3>

                    </div>

                </TinderCard>
            ))}
        </div>
        
    </div>;
}

export default TinderCards;