/* --------------------------- Chart des recettes --------------------------- */

import React from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
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
            <div className="chart chart3 d-flex justify-content-center" style={{ height: 500 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie
                            data={data}
                            // cx={200}
                            // cy={200}
                            // innerRadius={150} // Modification de la taille intérieure (espace intérieure)
                            // outerRadius={200} // Modification de la taille extérieure (bord)
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
                </ResponsiveContainer>
            </div>
        </div>
    )
}