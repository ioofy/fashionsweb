import React from 'react'
import { Alert } from 'react-bootstrap'


const Message = ({ variant, children, margin, textAlign, width, height }) => {
    return (
        <Alert variant={variant} style={{display: 'block', margin, textAlign, width, height , zIndex: '1'}}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
