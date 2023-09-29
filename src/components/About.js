import React from 'react';
import about from "../assets/img/about.jpg";

function About(){
    return (
        <>
        <div className='container'>
            <div className='row '>
                <h2 className='text-center'>About Us</h2>
                <div className='col-md-6 col-sm-12 col-lg-6  mt-4 mb-4'>
                    <div className='about-content'>
                        <p>At <strong>Foody</strong>, we are passionate about bringing delicious meals right to your doorstep. Our journey began with a simple idea: to make it convenient for you to enjoy your favorite cuisines from the comfort of your home or office.</p>
                        <h6>Our Mission &#8594;</h6>
                        <p>Our mission is to redefine the way you experience food. We strive to connect you with a diverse range of restaurants, cafes, and eateries in your area, offering an extensive menu of culinary delights. Whether you're craving a classic pizza, sizzling burgers, exotic Asian dishes, or health-conscious salads, we've got you covered.</p>
                        <h6>Quality and Convenience &#8594;</h6>
                        <p>We are committed to delivering not just food but an exceptional dining experience. Our platform is designed to provide you with easy-to-navigate menus, secure online payments, and timely deliveries. We work closely with our restaurant partners to ensure that every meal you receive is made with the finest ingredients and utmost care.</p>
                        <h6>Your Satisfaction Matters &#8594;</h6>
                        <p>Your satisfaction is our top priority. We value your feedback and continuously strive to improve our services. Our dedicated customer support team is here to assist you, whether you have a special request or need assistance with your order.</p>
                        <h6>Local Partnerships &#8594;</h6>
                        <p>We take pride in supporting local businesses and communities. Many of our partner restaurants are family-owned establishments with a passion for cooking and serving delicious food. By ordering through us, you're contributing to the growth of these local gems.</p>
                    </div>
                </div>
                <div className='col-md-6 col-sm-12 col-lg-6 mt-4 mb-4'>
                    <div className='about-us-image'>
                        <img src={about} alt='about' className='about-img img-fluid'></img>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default About;