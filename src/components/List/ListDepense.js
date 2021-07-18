import React, { Fragment, useState, useEffect } from 'react'
import "./List.css"

export default function ListDepense() {

    const [expense, setExpense] = useState([])

    // Récupération du Local Storage

    useEffect(()=>{

        const depense = localStorage.getItem('data')
        
        if(depense){
            setExpense(JSON.parse(depense))
        }
        },[])

    /* ------------------------------ Tri par date ------------------------------ */

    let tri = expense.sort((a,b) => parseInt(b.date) - parseInt(a.date));
    
    return (
        <Fragment>
            <section>
                <div className="container mt-5">
                    <div className="d-flex justify-content-center align-items-start listeCat">
                        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                        <button className="nav-link active" id="v-pills-autres-tab" data-bs-toggle="pill" data-bs-target="#v-pills-autres" type="button" role="tab" aria-controls="v-pills-autres" aria-selected="true">Autres</button>
                        <button className="nav-link" id="v-pills-alimentation-tab" data-bs-toggle="pill" data-bs-target="#v-pills-alimentation" type="button" role="tab" aria-controls="v-pills-alimentation" aria-selected="false">Alimentation</button>
                        <button className="nav-link" id="v-pills-assurance-tab" data-bs-toggle="pill" data-bs-target="#v-pills-assurance" type="button" role="tab" aria-controls="v-pills-assurance" aria-selected="false">Assurance</button>
                        <button className="nav-link" id="v-pills-banque-tab" data-bs-toggle="pill" data-bs-target="#v-pills-banque" type="button" role="tab" aria-controls="v-pills-banque" aria-selected="false">Banque</button>
                        <button className="nav-link" id="v-pills-loisirs-tab" data-bs-toggle="pill" data-bs-target="#v-pills-loisirs" type="button" role="tab" aria-controls="v-pills-loisirs" aria-selected="false">Loisirs</button>
                        <button className="nav-link" id="v-pills-loyer-tab" data-bs-toggle="pill" data-bs-target="#v-pills-loyer" type="button" role="tab" aria-controls="v-pills-loyer" aria-selected="false">Loyer</button>
                        <button className="nav-link" id="v-pills-santé-tab" data-bs-toggle="pill" data-bs-target="#v-pills-santé" type="button" role="tab" aria-controls="v-pills-santé" aria-selected="false">Santé</button>
                        <button className="nav-link" id="v-pills-sports-tab" data-bs-toggle="pill" data-bs-target="#v-pills-sports" type="button" role="tab" aria-controls="v-pills-sports" aria-selected="false">Sport</button>
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-autres" role="tabpanel" aria-labelledby="v-pills-autres-tab">
                                <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Autres") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-alimentation" role="tabpanel" aria-labelledby="v-pills-alimentation-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Alimentation") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-assurance" role="tabpanel" aria-labelledby="v-pills-assurance-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Assurance") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-banque" role="tabpanel" aria-labelledby="v-pills-banque-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Banque") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-loisirs" role="tabpanel" aria-labelledby="v-pills-loisirs-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Loisirs") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-loyer" role="tabpanel" aria-labelledby="v-pills-loyer-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Loyer") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-santé" role="tabpanel" aria-labelledby="v-pills-santé-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Santé") {
                                            return (
                                            <tr key={index}>
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
                            <div className="tab-pane fade" id="v-pills-sports" role="tabpanel" aria-labelledby="v-pills-sports-tab">
                            <table className="table">
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
                                    {expense.map((element, index) => {
                                        if(element.category === "Sports") {
                                            return (
                                            <tr key={index}>
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
                    </div>
                </div>
            </section>
            
        </Fragment>
    )
}
