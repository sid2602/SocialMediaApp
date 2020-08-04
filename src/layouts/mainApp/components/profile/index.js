import React from 'react';

import {ProfileSection,ProfilePhoto,FullName,UserData} from './style'

const Profile = () =>{



    return(
        <ProfileSection>
            <ProfilePhoto>
                <img src="img/zdj.jpg"/>
            </ProfilePhoto>
            <FullName>
                <h2>Filip Kornaus</h2>
            </FullName>
            <UserData>
                <div><i className="fas fa-map-marker-alt"></i> Tarnów, Poland</div>
                <div><i className="fas fa-birthday-cake"></i> 19.12.2001</div>
                <button><i className="fas fa-pencil-alt"></i>Edit Profile </button>
            </UserData>
            
        </ProfileSection>
    )
}

export default Profile;