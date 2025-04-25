import React from 'react';
import './repoCard.css';

const RepoCard = () => {
  return (
    <div className="repo-card">
      <p className="title-text">CardTitle</p>
      <p className="body-text">Description</p>
			<div className="flex flex-row gap-2">
				<div className="body-text">mit</div>
				<div className="body-text">action-fork</div>
				<div className="body-text">star</div>
				<div className="samll-text">status</div>
			</div>
    </div>
  );
};

export default RepoCard;