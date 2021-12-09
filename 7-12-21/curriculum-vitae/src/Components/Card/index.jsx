import React from 'react';


const Card = (props) => (
    <div className='card'>
       
        
        <div className='card_front'>

            <h4 className='card__title'>{props.title}</h4>
            <p className='card__content'>{props.content}</p>
            <h4 className='card__color'>{props.color}</h4>
            <h4 className='card__size'>{props.size}</h4>
            <button className='card__btn'>{props.btn}</button>
        </div>
    </div>
)
export default Card