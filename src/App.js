import Home from "./components/Home";
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Menu from "./components/Menu";
import About from "./components/About";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import BookingForm from "./components/BookingPage ";
import ReservationConfirmation from "./components/Reserve";
import "./App.css";

import { BrowserRouter , Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/menu" element={<Menu/>} />
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/contact-us" element={<Contact/>} />
            <Route exact path="/book-table" element={<BookingForm/>} />
            <Route path="/confirmation" component={ReservationConfirmation} />
            <Route path="/not-found" element={NotFound} />
        </Routes>
        <Footer/>
    </BrowserRouter>

  </>
  );
}

export default App;
