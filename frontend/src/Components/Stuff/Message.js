import React from 'react'
import { Alert } from 'react-bootstrap'

const Message = ({ variant, children }) => {
    return (
        <Alert variant={variant} style={{ margin: '150px auto', textAlign: 'center', display: 'block'}}>
            {children}
        </Alert>
    )
}

Message.defaultProps = {
    variant: 'info',
}

export default Message
