import React from 'react';
import './repoCard.css';

const RepoCard = ({repoData}) => {
  return (
    <div className="repo-card">
      <p className="title-text">CardTitle</p>
      <p className="body-text">Description</p>
			<div className="flex flex-row gap-2">
				<div className="body-text">
					<img src="/Chield_alt.svg" alt="Chield" className="chield-icon" />
					<span>Mit</span>
				</div>
				<div className="body-text">
					<img src="/Nesting.svg" alt="Nesting" className="nesting-icon" />
					<span>Forks</span>
				</div>
				<div className="body-text">
					<img src="/Star.svg" alt="Star" className="star-icon" />
					<span>Stars</span>
				</div>
				<div className="small-text">
					status
					<span></span>
				</div>
			</div>
    </div>
  );
};

export default RepoCard;