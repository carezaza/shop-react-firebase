import React from 'react'

import { Card , ButtonClose, MessageTag } from './error.card.styles'

const ErrorCard = ({ message , onClick }) => {
    if(!message) return null;
    return (
        <Card>
            <MessageTag>{message}</MessageTag>
            <ButtonClose onClick={onClick} >X</ButtonClose>
        </Card>
    )
}

export default ErrorCard;
 