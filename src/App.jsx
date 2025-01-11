import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Body from "./Body";

function App() {
  return(
    <>
    <BrowserRouter basename="/">
    <Routes>
    <Route path = "/" element ={<Body/>}>
      <Route path = "/login" element = {<Login/>}/>
      <Route path = "/test" element ={<div>Test Page</div>}/>
    </Route>
    </Routes>
    </BrowserRouter>  
    </>
  )
}

export default App;
