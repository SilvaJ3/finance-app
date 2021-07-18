/* --------------------------- Chart des recettes --------------------------- */

import React from 'react'
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import "./Chart.css";


export default function Chart(props) {

    const data = [
    {name: "Dépense", value: props.totalD},
    {name: "Recette", value: props.totalR},
    ]

    const COLORS = [
        "rgba(255, 0, 40, .9)",
        "rgba(56, 170, 64, .9)",
    ];

    return (
        <div className="container">
            <div className="chart d-flex justify-content-center">
                <PieChart width={300} height={600}>
                    <Pie
                        data={data}
                        cx={150}
                        cy={150}
                        // innerRadius={150} // Modification de la taille intérieure (espace intérieure)
                        outerRadius={100} // Modification de la taille extérieure (bord)
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
    )
}