import React from "react";
import "../NewExpenses/NewExpenses.css"

const NewExpenses = () => {

    let descriptionValue = document.getElementsByClassName("description")[0];
    let amountValue = document.getElementsByClassName("amountExpenses")[0];
    let categorySelected = document.getElementsByClassName("category")[0];
    let time = document.getElementById("time");

    const handleClick = (description, amount, category, time) => {
        if (description == "" ) {
            
        }
        console.log(description.value);
        let new_description = description.value;
        console.log(amount.value);
        let new_amount = amount.value;
        console.log(category.value);
        let new_category = category.value;
        console.log(time.value);
        let new_time = time.value
    }

    return(
        <div className="d-flex justify-content-center w-100">
            <form className="d-flex flex-column w-100">
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
                        <button type="submit" className="btn btn-primary btnExpenses w-100 rounded-0" onClick={() => handleClick(descriptionValue, amountValue, categorySelected, time)}>Valider</button>
                    </div>
                    
                </div>
            </form>
        </div>
    );
};

export default NewExpenses