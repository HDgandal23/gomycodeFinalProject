import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DetailRecipes from "./Pages/DetailRecipes";


const Layout = () => {

return (
  <>
    <Navbar/>
      <Outlet/>
    <Footer/>
  </>
)
}

function App() {
  return (
    <div className="bg-black">
      
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route index element={<Home/>} />
        <Route path="recipes/:id" element={<DetailRecipes/>} />
      </Routes>
    </div>
  );
}

export default App;
