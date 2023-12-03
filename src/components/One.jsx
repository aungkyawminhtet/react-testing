import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    padding: 5px 10px;
    background: yellow;
    border: 2px solid black;
    border-radius: 10px;

    &:hover{
        background: pink;
    }
`

const One = () => {
  return (
    <div>
       <Button>Click Me</Button>
    </div>
  )
}

export default One
