import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Home from "./component/Home";
import About from "./component/about"
import Subscribe from "./component/subscribe"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👉 Default page = Signup */}
        <Route path="/" element={<Signup />} />

        {/* 👉 Home page */}
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={
<About />}/>
<Route path="/subscribe" element={
<Subscribe /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;