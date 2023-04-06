import React, { useState } from 'react'
import SingleCard from './components/SingleCard'
import './Game.css'

const cardImages = [
  { "src": "/img/helmet-1.png" },
  { "src": "/img/potion-1.png" },
  { "src": "/img/ring-1.png" },
  { "src": "/img/scroll-1.png" },
  { "src": "/img/shield-1.png" },
  { "src": "/img/sword-1.png" },
]
const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCards(shuffleCards)
        setTurns(0)
        
    }
    console.log(cards, turns)
    return ( 
        <div className='Game'>
            <h1>Memory Game</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className='card-grid'>
            {cards.map( card => (
                <SingleCard key={card.id} card={card}/>
            ))}

            </div>
        </div>
     );
}
 
export default Game;