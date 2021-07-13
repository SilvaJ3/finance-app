// import React, { Fragment, useState, useEffect } from 'react'
// import "./Statistiques.css"
// import Header from '../../components/Header/Header'
// import Footer from '../../components/Footer/Footer'

// export default function Statistiques() {

//     const [depenseGraph, setDepenseGraph] = useState([]);
//     const [recetteGraph, setRecetteGraph] = useState([]);

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

//     let gain = () => {
//         recetteGraph.map((item, index) => {
//             console.log(item.category);
//             if(item.category === "Gain") {
//                 console.log(index + " : " + item.category);
//                 return (
//                     <h1>{index} : Catégorie - {item.category} - Montant : {item.amount}</h1>
//                 )
                
//             } else {
//                 console.log("rien à retourner");
//             }
//         })
//     }

//     return (
//         <Fragment>
//             <Header />

//             <h1>Page Statistiques</h1>

//             {recetteGraph.map((item, index) => {
//             console.log(item.category);
//             if(item.category === "Gain") {
//                 console.log(index + " : " + item.category);
//                 return (
//                     <h1>{index} : Catégorie - {item.category} - Montant : {item.amount}</h1>
//                 )
//             } else {
//                 console.log("rien à retourner");
//             }
//         })}

//             <Footer />
//         </Fragment>
//     )
// }




import React, { Component, Fragment } from 'react'
import "./Statistiques.css"
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default class Statistiques extends Component {

    
    state = {
        recette: [],
        depense: [],
    }

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
    

    gain = () => {
        this.state.recette.map((item, index) => {
            // console.log(item.category);
            if(item.category === "Gain") {
                // console.log(index + " : " + item.category);
                return <h1>{index} : Catégorie - {item.category} - Montant : {item.amount}</h1>
            } else {
                // console.log("rien à retourner");
            }
        })
    }

    render() {

        

        return (
            <Fragment>
                <Header />

                    <h1>Page statistique</h1>

                    {() => this.gain()}

                <Footer/>
            </Fragment>
        )
    }
}
