import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import CardCollectionPage from "./features/Collection/CardCollectionPage"
import "./App.css"
import TableOfContents from "./pages/TableOfContents"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TableOfContents />} />
        <Route
          path="/collection/:collectionId"
          element={<CardCollectionPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
