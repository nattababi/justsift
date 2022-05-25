import React from 'react';

export default function UserInfo({ user }) {

    if (!user) return;

    return <>
        <div className='flex-div'>
            <div>
                <img className='profile-img' src={user.pictureUrl} alt='user-pic'></img>
            </div>
            <div>
                <h1>{user.firstName} {user.lastName}</h1>
                <h3>{user.title} - {user.team}</h3>
                <h2>Contact Information</h2>
                <div>Email: {user.email}</div>
                <div>Phone: {user.phone}</div>

                {user.skills && <div>
                    <h2>Skills</h2>
                    <ul>
                        {user.skills.map((x, i) => { return <li key={i}>{x.name}</li> })}
                    </ul>
                </div>}

                {user.interests && <div>
                    <h2>Interests</h2>
                    <ul>
                        {user.interests.map((x, i) => { return <li key={i}>{x}</li> })}
                    </ul>
                </div>}

                <h2>Bio</h2>
                {user.bio}
            </div>
        </div>
    </>
};