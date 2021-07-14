import React, { Component } from 'react'
import { Pie } from "react-chartjs-2"
import "./PieChart.css"

export default class PieChart2 extends Component {

    constructor(props){
        super(props);
        this.state = {
            chartData: {
                labels: ["Autres","Alimentation", "Assurance"],
                datasets: [
                    {
                        label: "Dépense",
                        data: [
                            props.data.autres,
                            props.data.gain,
                            props.data.salaire,
                        ],
                        backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)",
                        ],
                    }
                ]
            }
        }
    }

    addData(chart, label, data) {
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        Pie.update();
    }
    
    removeData(chart) {
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    render() {

        return (
            <div className="chart-container">
                <Pie
                    redraw={true}
                    data={this.state.chartData}
                />

            </div>
        )
    }
}
