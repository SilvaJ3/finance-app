import React, { Fragment, useState, useEffect } from 'react'

export default function ListRecette() {

    const [income, setIncome] = useState([])

    // Récupération du Local Storage

    useEffect(()=>{

        const data = localStorage.getItem('recette')
        
        if(data){
            setIncome(JSON.parse(data))
        }
        },[])
    
    return (
        <Fragment>
            <section>
                <div className="container-fluid mt-5">
                    <div className="d-flex justify-content-center align-items-start">

                    <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-autres" role="tabpanel" aria-labelledby="v-pills-autres-tab">
                                <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catégorie</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {income.map((element, index) => {
                                        if(element.category === "Autres") {
                                            return (
                                            <tr>
                                            <th scope="row">{index}</th>
                                                <td>{element.category}</td>
                                                <td>{element.time}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount} €</td>
                                            </tr>
                                        )
                                        }
                                        
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="v-pills-gain" role="tabpanel" aria-labelledby="v-pills-gain-tab">
                            <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catégorie</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {income.map((element, index) => {
                                        if(element.category === "Gain") {
                                            return (
                                            <tr>
                                            <th scope="row">{index}</th>
                                                <td>{element.category}</td>
                                                <td>{element.time}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount} €</td>
                                            </tr>
                                        )
                                        }
                                        
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="v-pills-impot" role="tabpanel" aria-labelledby="v-pills-impot-tab">
                            <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catégorie</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {income.map((element, index) => {
                                        if(element.category === "Impôt") {
                                            return (
                                            <tr>
                                            <th scope="row">{index}</th>
                                                <td>{element.category}</td>
                                                <td>{element.time}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount} €</td>
                                            </tr>
                                        )
                                        }
                                        
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="v-pills-lotto" role="tabpanel" aria-labelledby="v-pills-lotto-tab">
                            <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catégorie</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {income.map((element, index) => {
                                        if(element.category === "Lotto") {
                                            return (
                                            <tr>
                                            <th scope="row">{index}</th>
                                                <td>{element.category}</td>
                                                <td>{element.time}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount} €</td>
                                            </tr>
                                        )
                                        }
                                        
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="v-pills-remboursement" role="tabpanel" aria-labelledby="v-pills-remboursement-tab">
                            <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catégorie</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {income.map((element, index) => {
                                        if(element.category === "Remboursement") {
                                            return (
                                            <tr>
                                            <th scope="row">{index}</th>
                                                <td>{element.category}</td>
                                                <td>{element.time}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount} €</td>
                                            </tr>
                                        )
                                        }
                                        
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            <div className="tab-pane fade" id="v-pills-salaire" role="tabpanel" aria-labelledby="v-pills-salaire-tab">
                            <table class="table">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Catégorie</th>
                                        <th scope="col">Date</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Montant</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {income.map((element, index) => {
                                        if(element.category === "Salaire") {
                                            return (
                                            <tr>
                                            <th scope="row">{index}</th>
                                                <td>{element.category}</td>
                                                <td>{element.time}</td>
                                                <td>{element.description}</td>
                                                <td>{element.amount} €</td>
                                            </tr>
                                        )
                                        }
                                        
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="nav flex-column nav-pills mx-3 me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link active" id="v-pills-autres-tab" data-bs-toggle="pill" data-bs-target="#v-pills-autres" type="button" role="tab" aria-controls="v-pills-autres" aria-selected="true">Autres</button>
                            <button className="nav-link" id="v-pills-gain-tab" data-bs-toggle="pill" data-bs-target="#v-pills-gain" type="button" role="tab" aria-controls="v-pills-gain" aria-selected="false">Gain</button>
                            <button className="nav-link" id="v-pills-impot-tab" data-bs-toggle="pill" data-bs-target="#v-pills-impot" type="button" role="tab" aria-controls="v-pills-impot" aria-selected="false">Impôt</button>
                            <button className="nav-link" id="v-pills-lotto-tab" data-bs-toggle="pill" data-bs-target="#v-pills-lotto" type="button" role="tab" aria-controls="v-pills-lotto" aria-selected="false">Lotto</button>
                            <button className="nav-link" id="v-pills-remboursement-tab" data-bs-toggle="pill" data-bs-target="#v-pills-remboursement" type="button" role="tab" aria-controls="v-pills-remboursement" aria-selected="false">Remboursement</button>
                            <button className="nav-link" id="v-pills-salaire-tab" data-bs-toggle="pill" data-bs-target="#v-pills-salaire" type="button" role="tab" aria-controls="v-pills-salaire" aria-selected="false">Salaire</button>
                        </div>
                    </div>
                </div>
            </section>
            
        </Fragment>
    )
}
