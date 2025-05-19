import './App.css';
import { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo/userInfo.jsx';
import RepoCardList from './components/RepoCardList/repoCardList.jsx';
import debounce from 'debounce';

function App() {
	const [userData, setUserData] = useState(null);
	const [userRepos, setUserRepos] = useState(null);
	const [userInfo, setUserInfo] = useState({
		userImg: '',
		followers: 0,
		following: 0,
		location: 'Unknown'
	});
	const [userFound, setUserFound] = useState(null);
	const [fullView, setFullView] = useState(false);

	const defaultUser = "github";

	useEffect(() => {
		(async () => {
			let userData = await fetchUserData(defaultUser);
			let userRepos = await fetchUserRepos(defaultUser);
			saveUser(userData, userRepos);
		})();
	}, [])	

	const saveUser = (userData, userRepo) => {
		setUserData(userData);
		setUserInfo({
			userImg: userData.avatar_url,
			followers: userData.followers,
			following: userData.following,
			location: userData.location
		})
		setUserRepos(userRepo);
	}

	const handleSearch = async (e) => {
		let data = await fetchUserData(e.target.value)
		setUserFound(data);
	}

	const saveUserFound = async () => {
		console.log("userFound userFound", userFound)
		let userRepos = await fetchUserRepos(userFound.login);
		console.log("test userRepos", userRepos)
		saveUser(userFound, userRepos);
	}

	const fetchUserData = async (user) => {
		try {
			const response = await fetch(`https://api.github.com/users/${user}`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

	const fetchUserRepos = async (user) => {
		try {
			const response = await fetch(`https://api.github.com/users/${user}/repos`);
			const data = await response.json();
			return data;
		} catch (error) {
			console.log(error);
		}
	}

  return (
    <div className="App">
      <header className="App-header">
				<input onChange={debounce(handleSearch, 1500)} className="search-input" type="search" name="searchUser" id="searchUser" />
				{userFound && (
					<div className="search-results" onClick={saveUserFound}>
						<div key={userFound.id} className="search-result flex flex-row gap-4">
							<img src={userFound.avatar_url} width={70} height={70} alt={userFound.login} />
							<div className="flex flex-col justify-center">
								<p classname="body-text">{userFound.name}</p>
								<p className="small-text">{userFound.bio}</p>
							</div>
						</div>
					</div>
				)}
      </header>
			<main className="App-main">
				<UserInfo userInfo={userInfo} />
				<div>
					<h1 className="large-text">{userData?.name}</h1>
					<p className="body-text">{userData?.bio}</p>
				</div>
				<RepoCardList userRepos={userRepos} fullView={fullView} />
				{!fullView && (<button className="all-repo-button" onClick={() => setFullView(true)}>View all repositories</button>)}
			</main>
    </div>
  );
}

export default App;
