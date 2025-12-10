

import React from 'react'

export const PrintMyName = ( props ) => {
    console.log(props.name, props.age)
    return (
        <h1>My name is <mark>{props.name}</mark> and my age is {props.age}. Phone: {props.phone}</h1>
    )
}
