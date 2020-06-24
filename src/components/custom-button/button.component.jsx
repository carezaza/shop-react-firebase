import React from 'react'

import { CustomButton } from './button.styles'

function Button({ children , ...props}) {
    return (
    <CustomButton {...props}>{ children }</CustomButton>
    )
}

export default Button;