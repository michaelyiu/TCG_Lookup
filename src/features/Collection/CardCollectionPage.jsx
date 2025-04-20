import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"

const CollectionContainer = styled.div`
  padding: 20px;
`

const CardCollectionPage = () => {
  const location = useLocation()
  const name = location.state?.collectionName
  console.log(location.state)

  return (
    <CollectionContainer>
      <div>
        <h1>{name}</h1>
      </div>
    </CollectionContainer>
  )
}

export default CardCollectionPage
