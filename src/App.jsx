import './App.css'
import Items from "./components/pages/items";
import { Route, Routes } from "react-router";

function App() {

  return (
    <Routes>
      <Route path="/" element={<main />} />
      <Route path="/items" element={<Items />} />

      
    </Routes>
  )
}

export default App
