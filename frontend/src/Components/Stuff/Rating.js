import React from 'react'

// Rating dengan props

const Rating = ({ value, text, color, fontSize, marginBottom}) => {
    return (
        <div className='rating'>
            <span>
                <i style={{color, fontSize, marginBottom}} className={value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star' }></i>
            </span>
            <span>
                <i style={{color, fontSize, marginBottom}} className={value >= 2 ? 'fas fa-star' : value >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star' }></i>
            </span>
            <span>
                <i style={{color, fontSize, marginBottom}} className={value >= 3 ? 'fas fa-star' : value >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star' }></i>
            </span>
            <span>
                <i style={{color, fontSize, marginBottom}} className={value >= 4 ? 'fas fa-star' : value >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star' }></i>
            </span>
            <span>
                <i style={{color, fontSize, marginBottom}} className={value >= 5 ? 'fas fa-star' : value >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star' }></i>
            </span>
            <span> {text && text}</span>
        </div>
    )
}

export default Rating