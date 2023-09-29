import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Nav.css";


function Navbar(){
    return (
        <>
    <section className="top-header">
        <div className="container">
            <div className="row">
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <Link className="navbar-brand logo" to="/">F<span className="text-danger">oo</span>dy</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                <Link className="nav-link" to="/menu">Menu</Link>
                                <Link className="nav-link" to="/about">About Us</Link>
                                <Link className="nav-link" to="/contact-us">Contact</Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </section>
        </>
    )
}

export default Navbar;