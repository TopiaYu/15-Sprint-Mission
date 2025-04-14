import './App.css'
import Header from './components/Header';
import Main from './components/pages/Main';
import FreeBoard from './components/pages/FreeBoard';
import Items from "./components/pages/items";
import { Route, Routes } from "react-router";

function App() {

  return (
    <>
      <Header />
  
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/freeBoard" element={<FreeBoard />} />
        <Route path="/items" element={<Items />} />

        
      </Routes>
    </>
  )
}

export default App
