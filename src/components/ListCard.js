import React from 'react'

const ListCard = (props) => {
    console.log(props.quote, 'listcard props')
    return(
        <h1>{props.quote}</h1>
    )
}

export default ListCard