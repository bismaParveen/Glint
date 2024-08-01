import "./App.css";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Work from "./Components/Work/Work";
import Clients from "./Components/Clients/Clients"
import Contact from "./Components/Contact/Contact"

import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="flex">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Work />
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
