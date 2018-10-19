import React from 'react'
import '../styles/ListCard.css'

const ListCard = (props) => {
    console.log(props.quote, 'listcard props')
    return(
        <div className='card-container'>
            <h1 className='ronson'>Ron Says:</h1>
            <p className='quote'>{props.quote}</p>
        </div>
    )
}

export default ListCard