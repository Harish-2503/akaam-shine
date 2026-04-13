import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Signup";
import Home from "./component/Home";
import About from "./component/about"
import Subscribe from "./component/subscribe"
import Contact from "./component/contact"
import Startup from "./component/startups"
import Mentor from "./component/mentor"
import Ecosystem from "./component/ecosystem"
import Events from "./component/events"
import Eventoverview from "./component/eventoverview"
import Stories from "./component/stories"
import Communityhigh from "./component/communityhigh";
import Incubation from "./component/incubation"
import BecomeMentor from "./component/becomeMentor";
import Invest from "./component/invest";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 👉 Default page = Signup */}
        <Route path="/" element={<Signup />} />

        {/* 👉 Home page */}
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/subscribe" element={<Subscribe />}></Route>
        <Route path="/contact" element={<Contact />} ></Route>
        <Route path="/startups" element={<Startup/>} ></Route>
        <Route path="/mentor" element={<Mentor/>} ></Route>
        <Route path="/ecosystem" element={<Ecosystem/>} ></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/stories" element={<Stories/>} ></Route>
        <Route path="/communityhigh" element={<Communityhigh/>} ></Route>
        <Route path="/eventoverview" element={<Eventoverview />} />
         <Route path="/incubation" element={<Incubation />} />
         <Route path="/becomeMentor" element={<BecomeMentor/>}></Route>
         <Route path="/invest" element={<Invest/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;