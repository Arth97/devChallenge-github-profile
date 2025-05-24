import React from 'react';
import './repoCard.css';

const RepoCard = ({repoData}) => {

	const getUpdatedTime = () => {
		const updatedDate = new Date(repoData.updated_at);
		const currentDate = new Date();
		const diffInSeconds = Math.floor((currentDate - updatedDate) / 1000);

		if (diffInSeconds < 60) {
			return `updated ${diffInSeconds} seconds ago`;
		} else if (diffInSeconds < 3600) {
			const diffInMinutes = Math.floor(diffInSeconds / 60);
			return `updated ${diffInMinutes} minutes ago`;
		} else if (diffInSeconds < 86400) {
			const diffInHours = Math.floor(diffInSeconds / 3600);
			return `updated ${diffInHours} hours ago`;
		} else {
			const diffInDays = Math.floor(diffInSeconds / 86400);
			return `updated ${diffInDays} days ago`;
		}
	};

  return (
    <div className="repo-card">
      <p className="title-text">{repoData.name}</p>
      <p className="body-text truncat h-full">{repoData.description}</p>
			<div className="flex flex-row gap-2 items-center mt-auto">
				{repoData.license && (	
					<div className="body-text flex flex-row">
						<img src="/Chield_alt.svg" alt="Chield" className="chield-icon" />
						<span>{repoData.license.spdx_id}</span>
					</div>
				)}
				<div className="body-text flex flex-row">
					<img src="/Nesting.svg" alt="Nesting" className="nesting-icon" />
					<span>{repoData.forks}</span>
				</div>
				<div className="body-text flex flex-row">
					<img src="/Star.svg" alt="Star" className="star-icon" />
					<span>{repoData.stargazers_count}</span>
				</div>
				<div className="small-text">
					{getUpdatedTime()}
				</div>
			</div>
    </div>
  );
};

export default RepoCard;