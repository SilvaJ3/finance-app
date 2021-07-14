import React, { Component } from 'react'
import { Pie } from "react-chartjs-2"
import "./PieChart.css"

export default class PieChart extends Component {

    constructor(props){
        super(props);
        // this.componentDidUpdate = this.componentDidUpdate.bind(this);
        this.state = {
            chartData: {
                labels: ["Autres","Alimentation", "Assurance"],
                datasets: [
                    {
                        label: "Dépense",
                        data: [
                            props.data.autres,
                            props.data.alimentation,
                            props.data.assurance,
                        ],
                        backgroundColor: [
                            "rgb(255, 99, 132)",
                            "rgb(54, 162, 235)",
                            "rgb(255, 205, 86)",
                        ],
                    }
                ]
            }
        };
    }

    // componentDidUpdate(prevProps) {
    //     // let datasets = this.state.chartData.datasets;
    //     // datasets[0].data = this.props.data;
    //     // prevProps.data != this.props.data ? this.setState({datasets : datasets[0].data }) : null
    //     
    // }

    if(redraw) { 
        // destroyChart();
        
    }

    handleClick = () => {
        console.log("click");

    };

    render() {

        console.log("Je suis dans le render de Pie Chart");
        console.log(this.props.data);

        return (
            <div className="chart-container">
                <button className="btn btn-success text-white" onClick={this.handleClick}>Update</button>
                <Pie
                    redraw={true}
                    data={this.state.chartData}
                    option={{
                        maintainAspectRatio: false,
                    }}
                />
            </div>
        )
    }
}
