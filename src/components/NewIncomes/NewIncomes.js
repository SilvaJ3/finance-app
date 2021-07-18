import React from "react";
import { useState, useEffect } from "react";
import "./NewIncomes.css"

const NewIncomes = (props) => {

    const [income, setIncome] = useState([
    ]
    );


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

        if(income.length === 0) {
            setIncome([{description, amount, category, time, date} ]) //On doit maper dans un array donc il faut modifier notre state via un array
        } else {
            setIncome([...income, {description, amount, category, time, date} ])
        }
        console.log(income); // Les nouvelles dépenses se rajoutent correctement dans le state
    }

    /* -------------------------- Props vers le parent -------------------------- */

    props.income(income)

    /* ------------------------ Local Storage tuto dev.to ----------------------- */

    useEffect(()=>{

        const recetteStorage = localStorage.getItem('recette')
        
        if(recetteStorage){
            setIncome(JSON.parse(recetteStorage))
        }
        },[])
        
        useEffect(()=>{
        
            localStorage.setItem('recette',JSON.stringify(income))
        })

    /* --------------- Tri par date du plus ancien au plus récent --------------- */

    let tri = income.sort((a,b) => parseInt(b.date) - parseInt(a.date));

    /* ------------------------ Suppression d'une recette ----------------------- */

    let handleDelete = (event) => {
        let parent = event.target.parentElement.parentElement.id; // on cible la row où se trouve le btn
        let place = income.indexOf(income[parent]); // on récupère l'index de notre cible
        income.splice(place, 1); // on supprime l'item visé via son index
        localStorage.setItem('recette',JSON.stringify(income)) // on modifie le contenu du localStorage
        const recette = localStorage.getItem('recette') // On récupère son nouveau contenu
        setIncome(JSON.parse(recette)); // on setState du nouveau contenu du localStorage et ainsi on évite un dysfonctionnement du map et du sort
    }

    /* ----------------------- Modification d'une recette ----------------------- */

    let handleEdit = (event) => {
        event.preventDefault();
        console.log(event.target);
        let parent = event.target.parentElement.parentElement.parentElement.parentElement.parentElement.id; // on cible la row en partant du btn modal et en remontant sur 5 parents pour retrouver celle-ci et ainsi retrouver l'index dans le state
        let place = income.indexOf(income[parent]); // on récupère l'index de notre cible
        let description = event.target[0].value;
        let category = event.target[1].value;
        let amount = event.target[2].value;
        console.log(place);

        /* ------------------ Récupération de la date en format EU ------------------ */

        let year = (event.target[3].value).slice(0,4); // Récupération de l'année
        let day = (event.target[3].value).slice(8,10); // Récupération du jour
        let month = (event.target[3].value).slice(5,7); // Récupération du mois
        let time = day + "-" + month + "-" + year; // Remise en place de la date dans le bon ordre
        let date = year + month + day;

        /* ---------------- On redéfinit les valeurs de notre recette --------------- */

        income[place].description = description;
        income[place].category = category;
        income[place].amount = Number(amount);
        income[place].time = time;
        income[place].date = date;

        console.log(income); // la recette est bien modifié, il reste à actualiser notre localStorage

        localStorage.setItem('recette',JSON.stringify(income)) // on modifie le contenu du localStorage
        const recette = localStorage.getItem('recette') // On récupère son nouveau contenu
        setIncome(JSON.parse(recette)); // on setState du nouveau contenu du localStorage et ainsi on évite un dysfonctionnement du map et du sort
    }


    return(
        <div className="formulaire d-flex flex-column justify-content-center w-100">
            <div className="form-container border">
                <h1 className="text-center">Ajouter une nouvelle recette :</h1>
                {/* FORMULAIRE D'AJOUT */}
                <form className="d-flex flex-column w-100" onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <div className="col-9">
                            <input type="text" placeholder="Description de votre recette..." name="description" className="description w-100 rounded-0" required />
                        </div>
                        <div className="col-3">
                            <input type="number" className="amountExpenses w-100 rounded-0" name="amount" required min="0" placeholder="42"/>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="col-6">
                            <select className="form-select category rounded-0" name="category" aria-label="Default select example">
                                <option defaultValue value="Autres">Autres</option>
                                <option value="Gain">Gain</option>
                                <option value="Impot">Impôt</option>
                                <option value="Lotto">Lotto</option>
                                <option value="Remboursement">Remboursement</option>
                                <option value="Salaire">Salaire</option>
                            </select>
                        </div>
                        <div className="col-4 d-flex justify-content-center">
                            <input type="date" name="time" id="time" className="time" required min="2020-01-01" max="2023-12-31"/>
                        </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary btnExpenses rounded-0" >Valider</button>
                        </div>
                    </div>
                </form>
            </div>
            

            <div className="list-container">
                {income.map((item, index) => {
                    if(income.description !== "") {
                        return (
                        <div className="row d-flex income my-2" key={index} id={index}>
                            <div className="col-8 d-flex flex-column justify-content-center">
                                <p>Revenu du {item.time} d'une valeur de {item.amount} €</p>
                                <p>Description : {item.description}</p>
                                <p>Catégorie : {item.category}</p>
                            </div>
                            <div className="col-4 d-flex align-items-center justify-content-evenly">
                                <button className="btn border-none bg-primary p-1" data-bs-toggle="modal" data-bs-target="#editModalIncome"><i className="far fa-edit icones text-white"></i></button>
                                <button className="btn border-none bg-primary p-1" onClick={(index) => handleDelete(index)}><i className="fas fa-eraser icones text-white"></i></button>
                            </div>

                            {/* Modal pour éditer le contenu de notre recette */}

                            <div class="modal fade" id="editModalIncome" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modifier votre recette :</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                    <form className="d-flex flex-column w-100" onSubmit={(index) => handleEdit(index)}>
                                        <div className="d-flex flex-column align-items-center my-2">
                                            <div className="col-12">
                                                <input type="text" placeholder="Description de votre recette..." name="description" className="description w-100 rounded-0" required />
                                            </div>
                                            <div className="col-6 my-3">
                                                <select className="form-select category rounded-0" name="category" aria-label="Default select example">
                                                    <option defaultValue value="Autres">Autres</option>
                                                    <option value="Gain">Gain</option>
                                                    <option value="Impot">Impôt</option>
                                                    <option value="Lotto">Lotto</option>
                                                    <option value="Remboursement">Remboursement</option>
                                                    <option value="Salaire">Salaire</option>
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
                    )
                    }
                    return (
                        <p>Vous avez actuellement {income.length} dépenses</p>
                    )
                    
                })}
            </div>
        </div>
    );
};

export default NewIncomes
