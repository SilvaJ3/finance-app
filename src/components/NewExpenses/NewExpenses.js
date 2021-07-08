import React from "react";
import { useState } from "react";
import "../NewExpenses/NewExpenses.css"

const NewExpenses = () => {

    const [expense, setState] = useState({
        description : "",
        amount: 0,
        category: "",
        time: "",
    });

    const handleSubmit = event => {
        event.preventDefault();
        let description = event.target[0].value;
        let amount = event.target[1].value;
        let category = event.target[2].value;
        let time = event.target[3].value;
        setState({})

        // Reset

        setState({ description: "", amount: 0, category: "", time:""})
    }

    // const handleClick = (description, amount, category, time) => {
    //     setState({ descriptionVal, amountVal, categoryVal, timeVal })
    //     console.log(expense);
        // let Expense = ( description, amount, category, time ) => {
        //     let ExpensesArray;
        //     let newExp = {
        //         description: description,
        //         jour: time,
        //         amount: amount,
        //         category: category,
        //     }
        //     setState(ExpensesArray)
        // return (
        //     <div className= "d-flex flex-column justify-content-center">
        //         <h1>Dépense du {time} d'une valeur de {amount} €</h1>
        //         <p>{description}</p>
        //         <p>{category}</p>
        //     </div>
        // )
        //     }
        // }

    return(
        <div className="d-flex justify-content-center w-100">
            <form className="d-flex flex-column w-100" onSubmit={handleSubmit}>
                <div className="d-flex">
                    <div className="col-9">
                        <input type="text" placeholder="Description de votre dépense..." className="description w-100 rounded-0" required />
                    </div>
                    <div className="col-3">
                        <input type="number" className="amountExpenses w-100 rounded-0" required min="0" placeholder="42"/>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="col-6">
                        <select className="form-select category rounded-0" aria-label="Default select example">
                            <option defaultValue>Autres</option>
                            <option value="1">Alimentation</option>
                            <option value="2">Assurance</option>
                            <option value="3">Banque</option>
                            <option value="4">Loisirs</option>
                            <option value="5">Loyer</option>
                            <option value="6">Santé</option>
                            <option value="7">Sports</option>
                        </select>
                    </div>
                    <div className="col-3">
                        <input type="date" id="time" className="time" required min="2020-01-01" max="2023-12-31"/>
                    </div>
                    <div className="col-3">
                        <button type="submit" className="btn btn-primary btnExpenses w-100 rounded-0" >Valider</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default NewExpenses
