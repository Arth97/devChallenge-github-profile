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

	const [usersFound, setUsersFound] = useState(null);
	const [fullView, setFullView] = useState(false);

	const defaultUser = "github";

	useEffect(() => {
		fetchUserData(defaultUser);
		// fetchUsers();
	}, [])

	const fetchUserData = (user) => {
		fetch(`https://api.github.com/users/${user}`)
			.then((response) => response.json())
			.then((data) => {
				console.log("userData", data);
				setUserData(data);
				setUserInfo({
					userImg: data.avatar_url,
					followers: data.followers,
					following: data.following,
					location: data.location
				})
			})
			.catch((error) => {
				console.log(error);
			});
			
		fetch(`https://api.github.com/users/${user}/repos`)
			.then((response) => response.json())
			.then((data) => {
				console.log("userRepos", data);
				setUserRepos(data);
			})
			.catch((error) => {
				console.log(error);
			});
	} 

	const fetchUsers = (username) => {
		fetch(`https://api.github.com/search/users?q=${username}`)
			.then((response) => response.json())
			.then((data) => {
				console.log("userss", data.items);
				if (data.items.length > 0) {
					setUsersFound(data.items);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}

	const handleSearch = (e) => {
		fetchUsers(e.target.value)
		console.log("usersFound", usersFound);
	}

  return (
    <div className="App">
      <header className="App-header">
				<input onChange={debounce(handleSearch, 1500)} className="search-input" type="search" name="searchUser" id="searchUser" />
				{usersFound && (
					<div className="search-results">
						{usersFound.map((user) => (
							<div key={user.id} className="search-result flex flex-row gap-4">
								<img src={user.avatar_url} width={70} height={70} alt={user.login} />
								<div>
									<p>{user.login}</p>
									<p>{user.description}</p>
								</div>
							</div>
						))}
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
