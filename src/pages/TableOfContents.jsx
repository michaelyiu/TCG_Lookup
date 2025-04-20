import React from "react"
import { Link } from "react-router-dom"
import { PokemonCollectionMap } from "../CollectionMaps"

const TableOfContents = () => {
  return (
    <div>
      <h1>Table of Contents</h1>
      <h1>Card Collections</h1>
      <p>pokemon</p>
      {[...PokemonCollectionMap.entries()].map(([name, id]) => (
        <li key={id}>
          <Link to={`/collection/${id}`} state={{ collectionName: name }}>
            {name}
          </Link>
        </li>
      ))}
    </div>
  )
}

export default TableOfContents
