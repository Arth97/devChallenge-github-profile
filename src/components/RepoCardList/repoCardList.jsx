import React, { useEffect } from 'react';
import './repoCardList.css';
import RepoCard from './RepoCard/repoCard.jsx';

const RepoCardList = ({userRepos, fullView}) => {
  return (
    <div className="repo-card-list">
			{	fullView ? 
				userRepos?.map((repoData) => (
					<RepoCard key={repoData.id} repoData={repoData} />
				)) :
				userRepos?.slice(0,4).map((repoData) => (
					<RepoCard key={repoData.id} repoData={repoData} />
				))
			}
    </div>
  );
};

export default RepoCardList;