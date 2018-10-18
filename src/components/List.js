import React from 'react'
import ListCard from './ListCard'

const createCards = (array) => {
    return array.map(item => {
        return <ListCard quote={item}/>
    })
}

const List = (props) => {
    console.log(props, 'list props')
    return(
        <div>
            {createCards(props.quotes)}
        </div>
    )
}

export default List