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
import Partner from "./component/partner";
import Registration from "./component/registration";
import Mvp from "./component/mvp"
import Designaithon from "./component/designaithon"
import Nextgen from "./component/nextgen"
import Incubatee from "./component/incubatee";
import Dashboard from "./component/dashboard";
import Keyinit from "./component/keyinit";
import Journey from "./component/journey";
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
         <Route path="/partner" element={<Partner/>}></Route>
         <Route path="/registration" element={<Registration/>}></Route>
         <Route path="/mvp" element={<Mvp/>}></Route>
         <Route path="/designaithon" element={<Designaithon/>}></Route>
         <Route path="/nextgen" element={<Nextgen/>}></Route>
         <Route path="/incubatee" element={<Incubatee/>}></Route>
         <Route path="/dashboard" element={<Dashboard/>}></Route>
         <Route path="/keyinit" element={<Keyinit/>}></Route>
         <Route path="/journey" element={<Journey/>}></Route>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;