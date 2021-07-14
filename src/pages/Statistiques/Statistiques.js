// import React, { Fragment, useState, useEffect } from 'react'
// import "./Statistiques.css"
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'

// export default function Statistiques() {

//     const [depenseGraph, setDepenseGraph] = useState([]);
//     const [recetteGraph, setRecetteGraph] = useState([]);
//     const [incomeValue, setIncomeValue] = useState({
//         gain: [],
//     })

//     /* ------------------------ Récupération des dépenses ----------------------- */

//     useEffect(()=>{
//         const data = localStorage.getItem('data')
//         if(data){
//             setDepenseGraph(JSON.parse(data))
//         }
//     },[])

//     /* ------------------------ Récupération des recettes ----------------------- */

//     useEffect(()=>{
//         const recette = localStorage.getItem('recette')
//         if(recette){
//             setRecetteGraph(JSON.parse(recette))
//         }
//     },[])

//     console.log(recetteGraph);
//     console.log(depenseGraph);

//     recetteGraph.forEach(element => {
//         if(element.category === "Gain") {
//             setIncomeValue([...gain, {element} ])
//         }
//     })

//     return (
//         <Fragment>
//             <Header />

//             <h1>Page Statistiques</h1>

//             <Footer />
//         </Fragment>
//     )
// }


// Alternatif class

import React, { Component, Fragment } from 'react'
import "./Statistiques.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import PieChart from '../../components/Chart/PieChart'
import PieChart2 from '../../components/Chart/PieChart2'

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
        console.log("ComponentDidMount");
    }

    render() {

        // Récupération des items de recette pour les dispatcher vers les catégories appropriées en vue des chart

        this.state.recette.forEach(element => {
            switch (element.category) {
                case "Autres":
                    this.state.catRecette.autres += element.amount;
                    break;
                case "Gain":
                    this.state.catRecette.gain += element.amount;
                    break;
                case "Impôt":
                    this.state.catRecette.impôt += element.amount;
                    break;
                case "Lotto":
                    this.state.catRecette.lotto += element.amount;
                    break;
                case "Remboursement":
                    this.state.catRecette.remboursement += element.amount;
                    break;
                case "Salaire":
                    this.state.catRecette.salaire += element.amount;
                    break;
                default:
                    break;
            }
        })

        // Récupération des items de dépense pour les dispatcher vers les catégories appropriées en vue des chart


        this.state.depense.forEach(element => {
            switch (element.category) {
                case "Autres":
                    this.state.catDepense.autres += element.amount;
                    break;
                case "Alimentation":
                    this.state.catDepense.alimentation += element.amount;
                    break;
                case "Assurance":
                    this.state.catDepense.assurance += element.amount;
                    break;
                case "Banque":
                    this.state.catDepense.banque += element.amount;
                    break;
                case "Loisirs":
                    this.state.catDepense.loisirs += element.amount;
                    break;
                case "Loyer":
                    this.state.catDepense.loyer += element.amount;
                    break;
                case "Santé":
                    this.state.catDepense.santé += element.amount;
                    break;
                case "Sport":
                    this.state.catDepense.sport += element.amount;
                    break;
                default:
                    break;
            }
        })

        

        return (
            <Fragment>
                <Header />

                    <h1>Page statistique</h1>
                    {console.log("Je suis dans le return de Statistique")}
                    {console.log(this.state.catRecette)}
                    {console.log(this.state.catDepense)}
                    
                    <PieChart data={this.state.catDepense}/>
                    {/* <PieChart2 data={this.state.catRecette}/> */}

                <Footer/>
            </Fragment>
        )
    }
}



// , "Banque", "Loisirs", "Loyer", "Santé", "Sport"