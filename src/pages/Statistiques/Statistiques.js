import React, { Component, Fragment } from 'react'
import "./Statistiques.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Chart from '../../components/Chart/Chart'
import Chart2 from '../../components/Chart/Chart2'

export default class Statistiques extends Component {

    // Création de mon state avec mes recettes et dépenses qui centralisent chaque item
    state = {
        recette: [],
        depense: [],
        catDepense: {
            autres: 0,
            alimentation: 0,
            assurance: 0,
            banque: 0,
            loisirs: 0,
            loyer: 0,
            santé: 0,
            sport: 0,
        },
        catRecette: {
            autres: 0,
            gain: 0,
            impôt: 0,
            lotto: 0,
            remboursement: 0,
            salaire: 0,
        },
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
                    <div className="container d-flex flex-column justify-content-center p-5">
                        <h1 className="text-center text-decoration-underline pb-5">Votre page de Statistiques</h1>

                        <div className="">
                            <nav className="d-flex justify-content-center">
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-expense-tab" data-bs-toggle="tab" data-bs-target="#nav-expense" type="button" role="tab" aria-controls="nav-expense" aria-selected="true">Dépense</button>
                                    <button className="nav-link" id="nav-income-tab" data-bs-toggle="tab" data-bs-target="#nav-income" type="button" role="tab" aria-controls="nav-income" aria-selected="false">Recettes</button>
                                </div>
                            </nav>
                            <div className="tab-content" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-expense" role="tabpanel" aria-labelledby="nav-expense-tab">
                                    <Chart />
                                </div>
                                <div className="tab-pane fade" id="nav-income" role="tabpanel" aria-labelledby="nav-income-tab">
                                    <Chart2 />
                                </div>
                            </div>
                        </div>
                    </div>
                
            </section>
                <Footer/>
            </Fragment>
        )
    }
}