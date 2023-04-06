import React, { useEffect, useState } from 'react'
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
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)

    // funtion to duplicate the card images and shuffle it 
    // then let them have random id
    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setCards(shuffleCards)
        setTurns(0)
        
    }
    // funtion when click to back card image will set that card to choice one or two
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
        console.log(card)
    }

    // compare 2 choice card
    useEffect(() => {
        if(choiceOne && choiceTwo){
            if(choiceOne.src === choiceTwo.src){
                console.log('match')
                resetTurn()  
            }else{
                console.log('not match')
                resetTurn()
            }
        }
    },[choiceOne, choiceTwo])

    // reset choice and increse turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurn => prevTurn + 1)
    }

    return ( 
        <div className='Game'>
            <h1>Memory Game</h1>
            <button onClick={shuffleCards}>New Game</button>
            <div className='card-grid'>
            {cards.map( card => (
                <SingleCard 
                key={card.id} 
                card={card} 
                handleChoice={handleChoice}
                />
            ))}

            </div>
        </div>
     );
}
 
export default Game;