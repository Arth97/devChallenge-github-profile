import './App.css';
import { useEffect, useState } from 'react';
import UserInfo from './components/UserInfo/userInfo.jsx';
import RepoCard from './components/RepoCard/repoCard.jsx';

function App() {
	const [userData, setUserData] = useState(null);
	const [userInfo, setUserInfo] = useState({
		userImg: '',
		followers: 0,
		following: 0,
		location: 'Unknown'
	});

	const defaultUser = "github";

	const fetchUserData = (user) => {
		fetch(`https://api.github.com/users/${user}`)
			.then((response) => response.json())
			.then((data) => {
				console.log("data", data);
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
	} 

	const fetchUsers = () => {
		fetch("https://api.github.com/search/users?q=:username")
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}

	useEffect(() => {
		fetchUserData(defaultUser);
		// fetchUsers();
	}, [])

  return (
    <div className="App">
      <header className="App-header">
      </header>
			<main className="App-main">
				<UserInfo userInfo={userInfo} />
				<div>
					<h1>GitHub</h1>
					<p>How people build software</p>
				</div>
				<RepoCard />
			</main>
    </div>
  );
}

export default App;
