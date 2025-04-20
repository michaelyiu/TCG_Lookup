import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Test from "./pages/Test"
import Home from "./pages/Home"
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  )
}

export default App
