import React, {
    Component,
    Fragment
} from 'react'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css"

export default class About extends Component {
    render() {
        return ( 
            <Fragment>
                <Header />

                    <section>
                        <div className="container p-5">
                            <h1 className="text-center text-decoration-underline mb-5">Présentation</h1>


                            <div>
                                <div className="part_1">
                                    <div className="row">
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <i className="fas fa-chart-pie icons"></i>
                                            <p className="px-5 text-justify">
                                                Une image vaut mieux que 1000 mots.
                                                <br/> 
                                                Un graphique en dit plus que 1000 chiffres.
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="part_2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            
                                        </div>
                                        <div className="col-md-6 d-flex justify-content-center">
                                            <i className="fas fa-balance-scale icons"></i>
                                            <p className="px-5 text-justify">
                                                Parfaitement balancée comme toutes choses devraient l'être.
                                                <br/> 
                                                Gardez le contrôle sur votre portefeuille.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="part_3">
                                    <div className="row">
                                        <div className="col-md-6 d-flex justify-content-center">
                                        <i className="fas fa-piggy-bank icons"></i>
                                            <p className="px-5 text-justify">
                                                Le contrôle de votre compte
                                                <br/> 
                                                Fixez-vous un budget et apprenez à le gérer.
                                            </p>
                                        </div>
                                        <div className="col-md-6">
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="about my-5">
                                <div className="accordion accordion-flush border-0" id="accordionFlushExample">
                                    <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingOne">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Comment fonctionne cette application ?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body accordion_bg">
                                            Cette application a été créée avec le framework REACT JS avec l'utilisation de package NPM tels que bootstrap mais également rechart js pour la mise à disposition d'une librairie de divers graphiques permettant de donner un côté plus attractif visuellement et plus parlant au niveau de la répartition de vos dépenses et de vos recettes.
                                        </div>
                                    </div>
                                    </div>
                                    <div className="accordion-item">
                                    <h2 className="accordion-header" id="flush-headingTwo">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                        Quels sont les différentes fonctionnalités de cette application ?
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body accordion_bg">
                                            Il vous est possible d'ajouter à votre guise vos dépenses et recettes suivant un certain nombre de catégories permettant ainsi de mieux répartir vos dépenses et recettes.
                                            <br/>
                                            <br/>
                                            Vous retrouverez sur la page d'accueil, votre <i className="italic">Dashboard</i> personnel avec la possibilité de créer vos dépenses/recettes mais également de voir le total de ceux-ci individuellement mais également mis en comparaison.
                                            <br/>
                                            <br/>
                                            L'onglet <i className="italic">Recap</i> vous amène directement sur votre récapitulatif trié par types de dépenses/recettes. Ceci donnant une vision plus précise du nombre de dépenses/recettes par catégories.
                                            <br/>
                                            <br/>
                                            Pour finir, votre onglet <i className="italic">Statistiques</i> reprend en tout simplicité des graphiques permettant de garder l'oeil sur ce qui prend le plus de place dans vos dépenses courantes mais également dans vos revenus.
                                        </div>
                                    </div>
                                    </div>
                                    <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                    Pourquoi cette application ?
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div className="accordion-body accordion_bg">
                                        Apprenant au sein de Molengeek et diplômé de comptabilité, l'idée de cette application a germé après un besoin réel de ma part sur la gestion de mon propre budget. 
                                        <br/>
                                        Bien qu'étant une version Bêta de ce que pourrait ressembler la version aboutie de cette idée, celle-ci les bases de la gestion de budget et le suivi de nos dépenses. La gestion de budget est, avant tout, la possibilité de conserver ses dépenses et ses recettes mais également de pouvoir garder un oeil sur ce qui représente le plus gros poste dans nos dépenses afin de pouvoir adapter ses habitudes de consommations.
                                    </div>
                                </div>
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