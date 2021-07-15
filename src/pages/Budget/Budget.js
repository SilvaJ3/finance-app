import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import {Fragment} from "react"
import Chart from '../../components/Chart/Chart'

class Budget extends Component {
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
                <h1 className="text-center">Page Budget</h1>

                <div className="container">
                    <nav>
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

                        </div>
                    </div>
                </div>
            </section>
            



            <Footer />
        </Fragment>
        )
    }
}

export default Budget