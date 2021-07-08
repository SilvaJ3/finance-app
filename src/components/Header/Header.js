import React from 'react'
import { Link } from "react-router-dom"
import "./header.css"

function Header() {
    return (
        <header>
            <div className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                    <div className="container-fluid d-flex flex-column">
                        <a className="navbar-brand text-white" href="">Navbar</a>
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
                                    <Link className="link" to ="/Budget">BUDGET</Link>
                                </li>
                                <li className="nav-item mx-3">
                                    <Link className="link" to ="/Stats">STATISTIQUES</Link>
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