import React from "react"
import styled from "styled-components"

const CardContainer = styled.div`
  display: flex;
  padding: 20px;
`

const CardImage = styled.img``

const CardName = styled.div`
  padding: 20px;
`

const CardCollectionPage = ({ card }) => {
  return (
    <CardContainer>
      <CardImage src={card.imageUrl}></CardImage>
      <CardName>{card.name}</CardName>
    </CardContainer>
  )
}

export default CardCollectionPage
