import React from 'react'
import '../styles/ListCard.css'

const ListCard = (props) => {
    console.log(props.quote, 'listcard props')
    return(
        <div className='card-container'>
            <h1 className='ron-says'>Ron Says:</h1>
            <div className='quote-container'>
                <p className='quote'>{props.quote}</p>
            </div>
        </div>
    )
}

export default ListCard