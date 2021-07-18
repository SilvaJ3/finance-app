/* --------------------------- Chart des recettes --------------------------- */

import React from 'react'
import { useState, useEffect } from "react"
import { PieChart, Pie, Tooltip, Cell, } from 'recharts';
import "./Chart.css";


export default function Chart() {

    const data = [
    {name: "Autres", value: 0},
    {name: "Gain", value: 0},
    {name: "Impôt", value: 0},
    {name: "Lotto", value: 0},
    {name: "Remboursement", value: 0},
    {name: "Salaire", value: 0},
    ]

    const COLORS = [
        "rgba(255, 99, 132, .7)",
        "rgba(54, 162, 235, .7)",
        "rgba(255, 206, 86, .7)",
        "rgba(75, 192, 192, .7)",
        "rgba(153, 159, 64, .7)",
        "rgba(255, 159, 64, .7)",
    ];

    const [recette, setRecette] = useState([])

    useEffect(()=>{

        const item = localStorage.getItem('recette')
        
        if(item){
            setRecette(JSON.parse(item))
        }
        },[])

        // la boucle passe correctement dans mon hooks d'état et n'additionne qu'une seule fois

        recette.forEach(element => {
            switch (element.category) {
                case "Autres":
                    data[0].value = data[0].value + element.amount;
                    break;
                case "Gain":
                    data[1].value = data[1].value + element.amount;
                    break;
                case "Impot":
                    data[2].value = data[2].value + element.amount;
                    break;
                case "Lotto":
                    data[3].value = data[3].value + element.amount;
                    break;
                case "Remboursement":
                    data[4].value = data[4].value + element.amount;
                    break;
                case "Salaire":
                    data[5].value = data[5].value + element.amount;
                    break;
                default:
                    break;
            }
        })


    // Total des recettes pour le calcul du ratio en % par catégories
    let total = data[0].value + data[1].value + data[2].value + data[3].value + data[4].value + data[5].value;


    return (
        <div className="container p-5">
            <div className="row">
            <div className="col-lg-6 stats d-flex justify-content-center align-items-center">
                <div className="card card-stats" style={{width: "20rem"}}>
                    <ul className="list-group list-group-flush text-center">

                        {/* ni le map ni le forEach ne sont passés en l'état */}

                        <li className="list-group-item" style={{backgroundColor: `${COLORS[0]}`}}>{data[0].name} : {((100/total)*data[0].value).toFixed(2) === "Infinity" ? "0" : ((100/total)*data[0].value).toFixed(2)} %</li>

                        <li className="list-group-item"  style={{backgroundColor: `${COLORS[1]}`}}>{data[1].name} : {((100/total)*data[1].value).toFixed(2) === "Infinity" ? "0" : ((100/total)*data[1].value).toFixed(2)} %</li>

                        <li className="list-group-item"  style={{backgroundColor: `${COLORS[2]}`}}>{data[2].name} : {((100/total)*data[2].value).toFixed(2) === "Infinity" ? "0" : ((100/total)*data[2].value).toFixed(2)} %</li>

                        <li className="list-group-item"  style={{backgroundColor: `${COLORS[3]}`}}>{data[3].name} : {((100/total)*data[3].value).toFixed(2) === "Infinity" ? "0" : ((100/total)*data[3].value).toFixed(2)} %</li>

                        <li className="list-group-item"  style={{backgroundColor: `${COLORS[4]}`}}>{data[4].name} : {((100/total)*data[4].value).toFixed(2) === "Infinity" ? "0" : ((100/total)*data[4].value).toFixed(2)} %</li>

                        <li className="list-group-item"  style={{backgroundColor: `${COLORS[5]}`}}>{data[5].name} : {((100/total)*data[5].value).toFixed(2) === "Infinity" ? "0" : ((100/total)*data[5].value).toFixed(2)} %</li>

                    </ul>
                <div className="card-footer text-center">
                    Total : {total} €
                </div>
            </div>
            </div>
            <div className="col-lg-6 chart">
                
                    <PieChart width={500} height={500}>
                        <Pie
                            data={data}
                            cx={200}
                            cy={200}
                            // innerRadius={150} // Modification de la taille intérieure (espace intérieure)
                            outerRadius={200} // Modification de la taille extérieure (bord)
                            fill="#8884d8"
                            paddingAngle={1} // espace entre les parts
                            dataKey="value"
                            >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                
            </div>
            </div>
        </div>
    )
}
