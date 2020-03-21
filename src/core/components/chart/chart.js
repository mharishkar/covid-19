import React, { useState, useEffect } from 'react';
import { Chart } from "react-google-charts";

const PieChart = ({ dataList }) => {

	const pieOptions = {
		title: "",
		pieHole: 0.6,
		slices: [
			{
				color: "#2BB673"
			},
			{
				color: "#d91e48"
			},
			{
				color: "#007fad"
			},
			{
				color: "#e9a227"
			}
		],
		legend: {
			position: "bottom",
			alignment: "center",
			textStyle: {
				color: "233238",
				fontSize: 14
			}
		},
		tooltip: {
			showColorCode: true
		},
		chartArea: {
			left: 0,
			top: 0,
			width: "100%",
			height: "80%"
		},
		fontName: "Roboto"
	};

	const [coronaData, setCoronaData] = useState(dataList);

	useEffect(() => {
		setCoronaData((prevState) => {
			prevState.unshift(['Count', 'Day']);
			return prevState;
		})
	}, [dataList]);

	return (
		<div>
			<Chart
				width={'500px'}
				height={'300px'}
				chartType="PieChart"
				options={pieOptions}
				loader={<div>Loading Chart</div>}
				data={coronaData}
			/>
		</div>
	)
};

export default PieChart;
