/* eslint-disable array-callback-return */
import React, { Fragment } from "react";
import "./summary.scss";

const Summary = ({ dataList }) => {
	return (
		<Fragment>
			{
				Object.keys(dataList).map((summaryItem, index) => {
					if (summaryItem !== 'Country' && summaryItem !== 'NewRecovered') {
						return (
							<div className="card u-flex__column" key={index}>
								<div className="summary__title black-disabled">{summaryItem}</div>
								<div className="summary__count">{dataList[summaryItem]}</div>
							</div>
						)
					}
				})
			}
		</Fragment>
	)
};

export default Summary;
