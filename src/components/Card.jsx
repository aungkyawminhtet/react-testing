import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
background: gray;
width: 350px;
height: 150px;

h2{
    color: red;
}

h4{
    color: blue;
}
`
const Card = () => {
  return (
    <Container>
        <h2>Card Title</h2>
        <h4>Card desc</h4>
    </Container>
  )
}

export default Card
