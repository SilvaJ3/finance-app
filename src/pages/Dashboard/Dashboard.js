import React, {Fragment, useState} from "react";
import NewExpenses from "../../components/NewExpenses/NewExpenses";
import NewIncomes from "../../components/NewIncomes/NewIncomes"
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Chart3 from '../../components/Chart/Chart3'

import "./dashboard.css"

function Dashboard() {

    const [depense, setDepense] = useState([])
    const [recette, setRecette] = useState([]);

    const recupDepense = (data) => {
        if (data !== depense ) {
        setDepense(data);
        }
    }

    const recupRecette = (income) => {
        if (income !== recette) {
            setRecette(income)
        }
    }

    /* ------- Calcul des dépenses totales et actualisation de celles-ci ------ */
    let totalValue = 0;
    if(depense.length !== 0) {
        for(const item of depense) {
            const itemValue = item.amount;
            totalValue += itemValue;
        }
    }

    /* ------- Calcul des dépenses totales et actualisation de celles-ci ------ */
    let totalRecette = 0;

    if(recette.length !== 0) {
        for(const item of recette) {
            const itemValue = item.amount;
            totalRecette += itemValue;
        }
    }

    /* ----------------------------- Calcul du solde ---------------------------- */

    let solde = totalRecette - totalValue;

    
    
    return(
        <Fragment>
            <Header />
            <div className="container-lg dashboard">
                <h1 className="text-center pb-5 text-decoration-underline">Bienvenue sur votre page d'accueil</h1>
                <div className="row row_dashboard">
                    <div className="col-md-4 border border-dark d-flex flex-md-column dash-col-left">
                        <div>
                            <div>
                                <h1>Total dépenses :</h1>
                                <p>{totalValue} €</p>
                            </div>
                            <div>
                                <h1>Total recettes :</h1>
                                <p>{totalRecette} €</p>
                            </div>
                            <div>
                                <h1>Balance :</h1>
                                <p>{solde} €</p>
                            </div>
                        </div>
                        <div>
                            <Chart3 totalR={totalRecette} totalD={totalValue}/>
                        </div>
                    </div>
                    <div className="col-md-8 border border-dark dash-col-right">
                        <ul className="nav nav-tabs d-flex justify-content-end" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="expenses-tab" data-bs-toggle="tab" data-bs-target="#expenses" type="button" role="tab" aria-controls="expenses" aria-selected="true">Dépenses</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="incomes-tab" data-bs-toggle="tab" data-bs-target="#incomes" type="button" role="tab" aria-controls="incomes" aria-selected="false">Revenus</button>
                            </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active container p-5" id="expenses" role="tabpanel" aria-labelledby="expenses-tab">
                                <NewExpenses data={recupDepense}/>
                            </div>
                            <div className="tab-pane fade container p-5" id="incomes" role="tabpanel" aria-labelledby="incomes-tab">
                                <NewIncomes income={recupRecette}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </Fragment>
        
    )
}

export default Dashboard