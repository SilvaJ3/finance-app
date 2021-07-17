import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"

function Header() {
    return (
        <header>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid d-flex">
                        <div className="user d-flex justify-content-evenly align-items-center px-3">
                            <i className="far fa-user-circle text-white"></i>
                            <span className="text-white ml-2">Bonjour Junior</span>
                        </div>
                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Nav Bar UL */}
                        <div className="collapse navbar-collapse d-flex justify-content-center my-2" id="navbarNav">
                            <ul className="navbar-nav d-flex justify-content-evenly">
                                <li className="nav-item mx-3">
                                    <Link className="link" to ="/">ACCUEIL</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="link" to ="/Recap">RECAP</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="link" to ="/Stats">STATISTIQUES</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="link" to ="/About">QUI SOMMES-NOUS ?</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            
        </header>
    )
}

export default Header