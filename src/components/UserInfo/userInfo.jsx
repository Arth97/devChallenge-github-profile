import React from 'react';
import './userInfo.css';
import { useEffect, useState } from 'react';

const UserInfo = ({userInfo}) => {

	const {userImg, followers, following, location} = userInfo;

  return (
    <div className="user-info">
			<img src={userImg} width={125} height={125} alt="User Avatar" className="user-avatar" />
      {/* <div className="info-tag title-text">Image</div> */}
			<div className="info-tag title-text">Followers | {followers}</div>
			<div className="info-tag title-text">Following | {following}</div>
			<div className="info-tag title-text">Location | {location}</div>
    </div>
  );
};

export default UserInfo;