import React from 'react'
import ListCard from './ListCard'
import '../styles/List.css'

const createCards = (array) => {
    return array.map(item => {
        return <ListCard quote={item}/>
    })
}

const List = (props) => {
    console.log(props, 'list props')
    return(
        <div className='cards-container'>
            {createCards(props.quotes)}
        </div>
    )
}

export default List