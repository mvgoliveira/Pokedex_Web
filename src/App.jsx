import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Home } from "./pages/Home"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
	<>
		<ToastContainer enableMultiContainer={false} autoClose={2000} position="top-right" theme="light"/>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home/>}/>
			</Routes>
			<GlobalStyle/>
		</BrowserRouter>
	</>
  )
}

export default App
