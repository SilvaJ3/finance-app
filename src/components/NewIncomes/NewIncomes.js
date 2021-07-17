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

        if(income.length === 0) {
            setIncome([{description, amount, category, time} ]) //On doit maper dans un array donc il faut modifier notre state via un array
        } else {
            setIncome([...income, {description, amount, category, time} ])
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

    return(
        <div className="formulaire d-flex flex-column justify-content-center w-100">
            <div className="form-container border">
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
                        <div className="row d-flex income my-2" key={index}>
                            <div className="col-8 d-flex flex-column justify-content-center">
                                <p>Revenu du {item.time} d'une valeur de {item.amount} €</p>
                                <p>Description : {item.description}</p>
                                <p>Catégorie : {item.category}</p>
                            </div>
                            <div className="col-4 d-flex align-items-center justify-content-center">
                                <i className="far fa-edit icones"></i>
                                <i className="fas fa-eraser icones"></i>
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
