import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/partials/Header";
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
