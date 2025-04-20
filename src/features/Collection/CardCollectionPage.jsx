import React from "react"
import styled from "styled-components"
import { useLocation, useParams } from "react-router-dom"
import { useCollectionProducts } from "../../hooks/useCollectionProducts"

const CollectionContainer = styled.div`
  padding: 20px;
`

const CardCollectionPage = () => {
  const { collectionId } = useParams()
  const location = useLocation()
  const collectionName = location.state?.collectionName
  const { data: cards, isLoading, error } = useCollectionProducts(collectionId)

  if (isLoading) return <p>Loading cards...</p>
  if (error) return <p>Failed to load card data.</p>

  return (
    <CollectionContainer>
      <div>{collectionName}</div>
      {cards.map(
        (card, i) =>
          card.extendedData[0].value !== "Code Card" && <div>{card.name}</div>,
      )}
    </CollectionContainer>
  )
}

export default CardCollectionPage
