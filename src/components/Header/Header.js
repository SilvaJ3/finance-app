import React from 'react'
// import "/Header/header.css"

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
                                    <a className="nav-link active text-white" aria-current="page" href="">Dashboard</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="">Budget</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link text-white" href="">Statistiques</a>
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