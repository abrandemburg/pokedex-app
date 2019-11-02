import React from 'react'
import './action.scss'

const Action = ( { elemId, title } ) => (
    <div role="button" id={elemId}>{title}</div>
)

export default Action