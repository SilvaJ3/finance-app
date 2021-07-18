import React from "react";
import { useState, useEffect } from "react";
import "../NewExpenses/NewExpenses.css"
// import useLocalState from "../localStorage"

const NewExpenses = (props) => {

    const [expense, setExpense] = useState([]);

    const handleSubmit = (event) => {

        event.preventDefault(); // La page ne se recherchera pas après le submit du formulaire
        let description = event.target[0].value;
        let amount = Number(event.target[1].value);
        let category = event.target[2].value;

        /* ------------------ Récupération de la date en format EU ------------------ */

        let year = (event.target[3].value).slice(0,4); // Récupération de l'année
        let day = (event.target[3].value).slice(8,10); // Récupération du jour
        let month = (event.target[3].value).slice(5,7); // Récupération du mois
        let time = day + "-" + month + "-" + year; // Remise en place de la date dans le bon ordre
        let date = year + month + day;
        
        if(expense.length === 0) {
            setExpense([{description, amount, category, time, date} ]) //On doit maper dans un array donc il faut modifier notre state via un array
        } else {
            setExpense([...expense, {description, amount, category, time, date} ])
        }
        
        console.log(expense); // Les nouvelles dépenses se rajoutent correctement dans le state
        
    }

    /* -------------------------- Props vers le parent -------------------------- */

    props.data(expense)

    /* ------------------------ Local Storage tuto dev.to ----------------------- */

    useEffect(()=>{

        const data = localStorage.getItem('data')
        
        if(data){
            setExpense(JSON.parse(data))
        }
        },[])
        
    useEffect(()=>{
    
        localStorage.setItem('data',JSON.stringify(expense))
    })

    console.log(typeof expense);
    console.log(expense);

    /* ------------------------ Suppression d'une dépense ----------------------- */

    let handleDelete = (event) => {
        let parent = event.target.parentElement.parentElement.id; // on cible la row où se trouve le btn
        let place = expense.indexOf(expense[parent]); // on récupère l'index de notre cible
        expense.splice(place, 1); // on supprime l'item visé via son index
        localStorage.setItem('data',JSON.stringify(expense)) // on modifie le contenu du localStorage
        const data = localStorage.getItem('data') // On récupère son nouveau contenu
        setExpense(JSON.parse(data)); // on setState du nouveau contenu du localStorage et ainsi on évite un dysfonctionnement du map et du sort
    }

    /* ----------------------- Modification d'une dépense ----------------------- */

    let handleEdit = (event) => {
        event.preventDefault();
        let parent = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id; // on cible la row en partant du btn modal et en remontant sur 5 parents pour retrouver celle-ci et ainsi retrouver l'index dans le state
        let place = expense.indexOf(expense[parent]); // on récupère l'index de notre cible
        let description = event.target[0].value;
        let category = event.target[1].value;
        let amount = event.target[2].value;

        /* ------------------ Récupération de la date en format EU ------------------ */

        let year = (event.target[3].value).slice(0,4); // Récupération de l'année
        let day = (event.target[3].value).slice(8,10); // Récupération du jour
        let month = (event.target[3].value).slice(5,7); // Récupération du mois
        let time = day + "-" + month + "-" + year; // Remise en place de la date dans le bon ordre
        let date = year + month + day;

        /* ---------------- On redéfinit les valeurs de notre dépense --------------- */

        expense[place].description = description;
        expense[place].category = category;
        expense[place].amount = Number(amount);
        expense[place].time = time;
        expense[place].date = date;

        console.log(expense); // la dépense est bien modifié, il reste à actualiser notre localStorage

        localStorage.setItem('data',JSON.stringify(expense)) // on modifie le contenu du localStorage
        const data = localStorage.getItem('data') // On récupère son nouveau contenu
        setExpense(JSON.parse(data)); // on setState du nouveau contenu du localStorage et ainsi on évite un dysfonctionnement du map et du sort
    }

    /* --------------- Tri par date du plus ancien au plus récent --------------- */

    let tri = expense.sort((a,b) => parseInt(b.date) - parseInt(a.date));

    // let dateFr = new Date().toLocaleString("fr-FR").slice(0,10);

    return(
        <div className="d-flex flex-column justify-content-center w-100">
            <div className="form-container border border-dark d-flex flex-md-column align-items-center justify-content-center">
            <h1 className="text-center">Ajouter une nouvelle dépense :</h1>
            {/* FORMULAIRE D'AJOUT */}
            <button className="btn border border-dark-none bg-primary p-1" data-bs-toggle="modal" data-bs-target="#addModal"><i className="fas fa-plus icones text-white"></i></button>

                <div className="modal fade" id="addModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Nouvelle dépense</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                    <form className="d-flex flex-column w-100" onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <div className="col-9">
                            <input type="text" placeholder="Description de votre dépense..." name="description" className="description w-100 rounded-0" required />
                        </div>
                        <div className="col-3">
                            <input type="number" className="amountExpenses w-100 rounded-0" name="amount" step="0.01" required min="0" placeholder="42"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-6">
                            <select className="form-select category rounded-0" name="category" aria-label="Default select example">
                                <option defaultValue>Autres</option>
                                <option value="Alimentation">Alimentation</option>
                                <option value="Assurance">Assurance</option>
                                <option value="Banque">Banque</option>
                                <option value="Loisirs">Loisirs</option>
                                <option value="Loyer">Loyer</option>
                                <option value="Santé">Santé</option>
                                <option value="Sports">Sports</option>
                            </select>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <input type="date" name="time" id="time" className="time" required min="2020-01-01" max="2023-12-31"/>
                        </div>
                    </div>
                        <div className="modal-footer d-flex">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-primary btnExpenses rounded-0" >Valider</button>
                        </div>
                </form>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>

            <div className="list-container">  
            { expense.map((item, index) => {
                if(expense[0].description !== "") {
                    return (
                    <div className="row d-flex expense my-2" key={index} id={index}>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <p>Dépense du {item.time} d'une valeur de {item.amount} €</p>
                            <p>Description : {item.description}</p>
                            <p>Catégorie : {item.category}</p>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-evenly">
                        <button className="btn border border-dark-none bg-primary p-1" data-bs-toggle="modal" data-bs-target="#editModal"><i className="far fa-edit icones text-white"></i></button>
                            <button className="btn border border-dark-none bg-primary p-1" onClick={(index) => handleDelete(index)}><i className="fas fa-eraser icones text-white"></i></button>
                        </div>
                        {/* Modal pour éditer le contenu de notre dépense */}

                        <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Modifier votre dépense :</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form className="d-flex flex-column w-100" onSubmit={(index) => handleEdit(index)}>
                                    <div className="d-flex flex-column align-items-center my-2">
                                        <div className="col-12">
                                            <input type="text" placeholder="Description de votre dépense..." name="description" className="description w-100 rounded-0" required />
                                        </div>
                                        
                                        <div className="col-6 my-3">
                                            <select className="form-select category rounded-0" name="category" aria-label="Default select example">
                                                <option defaultValue>Autres</option>
                                                <option value="Alimentation">Alimentation</option>
                                                <option value="Assurance">Assurance</option>
                                                <option value="Banque">Banque</option>
                                                <option value="Loisirs">Loisirs</option>
                                                <option value="Loyer">Loyer</option>
                                                <option value="Santé">Santé</option>
                                                <option value="Sports">Sports</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <div className="col-4">
                                            <input type="number" className="amountExpenses w-100 rounded-0" name="amount" step="0.01" required min="0" placeholder="nouvelle valeur"/>
                                        </div>
                                        <div className="col-4 d-flex justify-content-center">
                                            <input type="date" name="time" id="time" className="time" required min="2020-01-01" max="2023-12-31"/>
                                        </div>
                                    </div>
                                    <div class="modal-footer mt-3">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fermer</button>
                                        <button type="submit" class="btn btn-primary">Sauvegarder</button>
                                    </div>
                                </form>
                                </div>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                ) // return
                } // if
            } // function map
            ) // param map
        }
        
            
            </div>
        </div>
    );
};

export default NewExpenses


