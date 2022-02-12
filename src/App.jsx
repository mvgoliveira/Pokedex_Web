import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Home } from "./pages/Home"
import { Pokemon } from "./pages/Pokemon"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pokemon" element={<Pokemon/>}/>
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App
