import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children, margin, textAlign }) => {
    return (
        <Alert variant={variant} style={{display: 'block', margin, textAlign}}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
