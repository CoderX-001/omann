import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import "./dist/main.min.css"

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
