import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Fragment} from "react"
import ListDepense from '../../components/List/ListDepense'
import ListRecette from '../../components/List/ListRecette'

class Recap extends Component {
    // Création de mon state avec mes recettes et dépenses qui centralisent chaque item
    state = {
        recette: [],
        depense: [],
    }

    // Récupération de notre localStorage au chargement de la page

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        if(data){
            this.setState({depense : data})
        }
        const recette = JSON.parse(localStorage.getItem("recette"));
        if(recette){
            this.setState({recette : recette})
        }
    }

    render() {

    return (
        <Fragment>
            <Header />
            <section>
                <div className="container-md p-5">
                <h1 className="text-center text-decoration-underline">Page Recap</h1>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-lg-start">
                                <ListDepense />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12 d-flex justify-content-lg-end">
                                <ListRecette />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </Fragment>
        )
    }
}

export default Recap