import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import OneBox from "./pages/OneBox"
import Signin from "./pages/Signin"
import Register from "./pages/Register"
function App() {
  return (
    <div>
      <BrowserRouter>
      
        <Routes>
        <Route path="/" element={<OneBox/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/signin" element={<Signin/>} />
          <Route path="/onebox" element={<OneBox />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
