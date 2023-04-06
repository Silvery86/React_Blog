import React from "react";

const SingleCard = ({card}) => {
    return ( 
        <div>
            <div className='card'>
                    <div>
                        <img className='front' src={card.src} alt='card front'/>
                        <img className='back' src='/img/cover.png' alt = 'card back'/>
                    </div>
                </div>
        </div>
     );
}
 
export default SingleCard;