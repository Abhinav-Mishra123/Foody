import React from "react";
import "../Styles/Nav.css";
import HeroImage from  "../assets/img/hero-image.jpg"
import { Link } from "react-router-dom";

function Hero(){
    return (
        <>
        <section className="hero-section">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-lg-6 co-sm-12">
                    <div className="left-hero mt-4">
                        <div className="left-content">
                            <h1>it's not just Food, It's an Experience.</h1>
                        </div>
                        <div className="left-btn mt-4">
                            <Link className="view_menu" to="/menu"><button className="btn btn-danger viewmenu">View Menu</button></Link>
                            {/* <Link className="booking" to="/booktable"><button className="btn bookatable">Book a Table</button></Link> */}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-6 co-sm-12">
                    <div className="right-hero">
                        <div className="right-hero-img">
                            <img src={HeroImage} className="img-fluid" alt="hero"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default Hero;