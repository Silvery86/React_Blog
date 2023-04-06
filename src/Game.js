import React, { useEffect, useState } from 'react'
import SingleCard from './components/SingleCard'
import './Game.css'

const cardImages = [
  { "src": "/img/helmet-1.png" , matched : false},
  { "src": "/img/potion-1.png" , matched : false},
  { "src": "/img/ring-1.png" , matched : false},
  { "src": "/img/scroll-1.png" , matched : false},
  { "src": "/img/shield-1.png" , matched : false},
  { "src": "/img/sword-1.png" , matched : false},
]
const Game = () => {
    const [cards, setCards] = useState([])
    const [turns, setTurns] = useState(0)
    const [choiceOne, setChoiceOne] = useState(null)
    const [choiceTwo, setChoiceTwo] = useState(null)
    const [disabled, setDisable] = useState(false)

    // funtion to duplicate the card images and shuffle it 
    // then let them have random id
    const shuffleCards = () => {
        const shuffleCards = [...cardImages, ...cardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setChoiceOne(null)
        setChoiceTwo(null)
        setCards(shuffleCards)
        setTurns(0)
        
    }
    // funtion when click to back card image will set that card to choice one or two
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    // compare 2 choice card
    useEffect(() => {

        if(choiceOne && choiceTwo){
            setDisable(true)
            if(choiceOne.src === choiceTwo.src){
                setCards(prevCards =>{
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src){
                            return{...card, matched: true}
                        }else{
                            return card
                        }
                    })
                })
                setTimeout(() =>resetTurn(),1000)  
            }else{
        
                setTimeout(() =>resetTurn(),1000)  
            }
        }
    },[choiceOne, choiceTwo])

    // reset choice and increse turn
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurn => prevTurn + 1)
        setDisable(false)
    }
    // automatic start game
    useEffect(() => {
        shuffleCards()
    },[])

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
                flipped={card === choiceOne || card === choiceTwo || card.matched}
                disabled={disabled}                    
                />
            ))}

            </div>
            <div>
                <h1>Turn: {turns}</h1>
            </div>
        </div>
     );
}
 
export default Game;