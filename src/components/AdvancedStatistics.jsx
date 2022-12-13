import React from 'react';
import { advancedStats } from '../constants/advancedStats';

const AdvancedStatistics = () => {
	return (
		<div className="advanced-stats">
			{advancedStats.length > 0 &&
				advancedStats.map((stat) => {
					return (
						<div key={stat.title} className="advanced-stats-card card">
							<div className="advanced-stats-icon-row card-img-top">
								<div className="advanced-stats-icon-wrapper">
									<img
										src={stat.icon}
										alt={stat.title}
										className="advanced-stats-icon"
									/>
								</div>
							</div>
							<div className="advanced-stats-body card-body">
								<h5 className="advanced-stats-title card-title">
									{stat.title}
								</h5>
								<p className="advanced-stats-description card-text">
									{stat.description}
								</p>
							</div>
						</div>
					);
				})}
		</div>
	);
};

export default AdvancedStatistics;
