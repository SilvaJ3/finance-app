import React from 'react'
import { useState, useEffect } from "react"
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

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
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 206, 86)",
        "rgb(75, 192, 192)",
        "rgb(153, 159, 64)",
        "rgb(255, 159, 64)",
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
                case "Impôt":
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

    return (
        <div className="container">
            <div className="row">
            <div className="col-6 stats">

            </div>
            <div className="col-6 chart">
                <PieChart width={800} height={600}>
                    <Pie
                        data={data}
                        cx={220}
                        cy={300}
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
