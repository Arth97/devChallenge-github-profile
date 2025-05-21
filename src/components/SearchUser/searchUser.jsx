import React, {useState} from 'react';
import './searchUser.css';
import debounce from 'debounce';

const SearchUser = ({userFound, handleSearch, saveUserFound}) => {
	const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <input onChange={debounce(handleSearch, 1500)} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} className="search-input" type="search" name="searchUser" id="searchUser" />
			{userFound && isFocused && (
				<div className="search-results" onClick={saveUserFound}>
					<div key={userFound.id} className="search-result flex flex-row gap-4">
						<img src={userFound.avatar_url} width={70} height={70} alt={userFound.login} />
						<div className="flex flex-col justify-center">
							<p className="body-text">{userFound.name}</p>
							<p className="small-text">{userFound.bio}</p>
						</div>
					</div>
				</div>
			)}
    </div>
  );
};

export default SearchUser;
