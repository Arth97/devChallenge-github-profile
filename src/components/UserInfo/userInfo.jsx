import React from 'react';
import './userInfo.css';
import { useEffect, useState } from 'react';

const UserInfo = ({userImg, followers, following, location}) => {
	useEffect(() => {
		console.log("UserInfo", userImg, followers, following, location);
		if (userImg) {
			console.log("userImg", userImg)
		}
		if (followers) {
			console.log("followers", followers)
		}
		if (following) {
			console.log("following", following)
		}
		if (location) {
			console.log("location", location)
		}
	} , [userImg, followers, following, location]);

  return (
    <div className="user-info flex justify-between">
      <div className="title-text">Image</div>
			<div className="title-text">Followers | {followers}</div>
			<div className="title-text">Following | {following}</div>
			<div className="title-text">Location | {location}</div>
    </div>
  );
};

export default UserInfo;