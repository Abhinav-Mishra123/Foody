import React from 'react';
import Menu from "./Menu";
import About from "./About";
import Hero from './Hero';
import Testimonial from './Testimonial';
import ContactUsForm from './ContactUsForm';


function Home(){
    return(
        <>
        
        <Hero/>
        <Menu/>
        <About/>
        <Testimonial/>
        <ContactUsForm/>
        </>
    )
}
export default Home;