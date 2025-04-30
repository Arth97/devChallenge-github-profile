import React, { useEffect } from 'react';
import './repoCardList.css';
import RepoCard from './RepoCard/repoCard.jsx';

const RepoCardList = ({userRepos}) => {

	useEffect(() => {
		console.log("userRepos222", userRepos);
	}, [userRepos]);

  return (
    <div className="repo-card-list">
			{userRepos?.map((repoData) => (
				<RepoCard key={repoData.id} repoData={repoData} />
			))}
    </div>
  );
};

export default RepoCardList;