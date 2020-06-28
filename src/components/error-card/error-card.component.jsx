import React from 'react'

import { Card , ButtonClose, MessageTag } from './error.card.styles'

const ErrorCard = ({ message , callback }) => {
    if(!message) return null;
    return (
        <Card>
            <MessageTag>{message}</MessageTag>
            <ButtonClose onClick={callback}>X</ButtonClose>
        </Card>
    )
}

export default ErrorCard;
 