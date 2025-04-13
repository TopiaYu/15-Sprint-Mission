import './App.css'
import Header from './components/Header';
import Main from './components/Main';
import Items from "./components/pages/items";
import { Route, Routes } from "react-router";

function App() {

  return (
    <>
      <div>
        <Header />
      </div>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/items" element={<Items />} />

        
      </Routes>
    </>
  )
}

export default App
