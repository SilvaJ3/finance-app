import React, {Fragment} from "react";
import NewExpenses from "../../components/NewExpenses/NewExpenses";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./dashboard.css"

function Dashboard() {

    const onExpenseDataParent = (data) => {
        console.log(data);
    } 

    onExpenseDataParent()
    
    return(
        <Fragment>
            <Header />
            <div className="container dashboard">
                <div className="row">
                    <div className="col-4 border d-flex flex-column dash-col-right">
                        <h1>Total dépenses :</h1>
                        <h3></h3>
                    </div>
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
                                <NewExpenses expenseData={onExpenseDataParent}/>
                            </div>
                            <div className="tab-pane fade" id="incomes" role="tabpanel" aria-labelledby="incomes-tab">...</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </Fragment>
        
    )
}

export default Dashboard