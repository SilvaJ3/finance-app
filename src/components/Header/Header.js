import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"

function Header() {
    return (
        <header>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid d-flex">
                        <div className="d-flex justify-content-evenly align-items-center">
                            <span className="text-white ml-2">WALLET <b className="brand">BUDGET</b></span>
                        </div>
                    
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* Nav Bar UL */}
                        <div className="collapse navbar-collapse my-2 d-flex justify-content-center" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item px-2">
                                    <Link className="link" to ="/">ACCUEIL</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="link" to ="/Recap">RECAP</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="link" to ="/Stats">STATISTIQUES</Link>
                                </li>
                                <li className="nav-item px-2">
                                    <Link className="link" to ="/About">A PROPOS</Link>
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