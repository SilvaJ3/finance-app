import React from "react";
import NewExpenses from "../NewExpenses/NewExpenses";

function Dashboard() {
    return(
        <div className="container-fluid p-3 dashboard">
            <div className="row ">
                <div className="col-8 border dash-col-left">
                    <ul className="nav nav-tabs d-flex justify-content-end" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="expenses-tab" data-bs-toggle="tab" data-bs-target="#expenses" type="button" role="tab" aria-controls="expenses" aria-selected="true">Dépenses</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="incomes-tab" data-bs-toggle="tab" data-bs-target="#incomes" type="button" role="tab" aria-controls="incomes" aria-selected="false">Revenus</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active container p-5" id="expenses" role="tabpanel" aria-labelledby="expenses-tab">
                            <NewExpenses />
                        </div>
                        <div className="tab-pane fade" id="incomes" role="tabpanel" aria-labelledby="incomes-tab">...</div>
                    </div>
                </div>
                <div className="col-4 border d-flex flex-column dash-col-right">
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard