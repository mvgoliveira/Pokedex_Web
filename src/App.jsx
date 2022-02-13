import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Home } from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  )
}

export default App
