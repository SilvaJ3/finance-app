import React from "react";
import { useState, useEffect } from "react";
import "../NewExpenses/NewExpenses.css"
// import useLocalState from "../localStorage"

const NewExpenses = (props) => {

    const [expense, setExpense] = useState([]);

    const handleSubmit = (event) => {
        let id = 0;
        event.preventDefault(); // La page ne se recherchera pas après le submit du formulaire
        let description = event.target[0].value;
        let amount = Number(event.target[1].value);
        let category = event.target[2].value;

        /* ------------------ Récupération de la date en format EU ------------------ */

        let year = (event.target[3].value).slice(0,4); // Récupération de l'année
        let day = (event.target[3].value).slice(8,10); // Récupération du jour
        let month = (event.target[3].value).slice(5,7); // Récupération du mois
        let time = day + "-" + month + "-" + year; // Remise en place de la date dans le bon ordre

        let createdDay = new Date().toLocaleString("fr-FR").slice(0,10);
        
        if(expense.length === 0) {
            setExpense([{description, amount, category, time, id} ]) //On doit maper dans un array donc il faut modifier notre state via un array
        } else {
            setExpense([...expense, {description, amount, category, time, id, createdDay} ])
        }
        console.log(expense); // Les nouvelles dépenses se rajoutent correctement dans le state
        id++;
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

    /* ------------------------ Suppression d'une dépense ----------------------- */

    let handleDelete = (id) => {
        let newData = expense.filter(element => element.id !== id);
        console.log(expense);
        console.log(newData);
        setExpense({newData});
    }

    // let dateFr = new Date().toLocaleString("fr-FR").slice(0,10);

    return(
        <div className="d-flex flex-column justify-content-center w-100">
            <div className="form-container border">
                <form className="d-flex flex-column w-100" onSubmit={handleSubmit}>
                    <div className="d-flex">
                        <div className="col-9">
                            <input type="text" placeholder="Description de votre dépense..." name="description" className="description w-100 rounded-0" required />
                        </div>
                        <div className="col-3">
                            <input type="number" className="amountExpenses w-100 rounded-0" name="amount" required min="0" placeholder="42"/>
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
                        <div className="col-2">
                            <button type="submit" className="btn btn-primary btnExpenses rounded-0">Valider</button>
                        </div>
                    </div>
                </form>
            </div>
            
            {/* prévoir un if pour ne pas lancer le map si l'array est vide */}

            <div className="list-container">  
            { expense.length !== 0 && expense !== null && expense !== undefined && expense.map((item, index) => {
                if(expense.description !== "") {
                    return (
                    <div className="row d-flex expense my-2" key={index}>
                        <div className="col-8 d-flex flex-column justify-content-center">
                            <p>Dépense du {item.time} d'une valeur de {item.amount} €</p>
                            <p>Description : {item.description}</p>
                            <p>Catégorie : {item.category}</p>
                        </div>
                        <div className="col-4 d-flex align-items-center justify-content-center">
                            <button className="btn border-none"><i className="far fa-edit icones"></i></button>
                            <button className="btn border-none" onClick={() => handleDelete(item.id)} key={index}><i className="fas fa-eraser icones"></i></button>
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


