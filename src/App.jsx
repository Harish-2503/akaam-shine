import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Home from "./component/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👉 Default page = Signup */}
        <Route path="/" element={<Signup />} />

        {/* 👉 Home page */}
        <Route path="/Home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;