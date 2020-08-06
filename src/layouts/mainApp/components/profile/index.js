import React,{useState,useRef} from 'react';

import {ProfileSection,ProfilePhoto,FullName,UserData,Input} from './style'

// In change User Data no functions and ref

const Data = ({onHandleClick}) => (
    <>
        <div><i className="fas fa-map-marker-alt"></i> Tarnów, Poland</div>
        <div><i className="fas fa-birthday-cake"></i> 19.12.2001</div>
        <button onClick={onHandleClick} ><i className="fas fa-pencil-alt"></i>Edit Profile </button>
    </>
)

const ChangeUserData = ({onHandleClick,file,city,brithday,changeUserDataClick}) =>(

        <>
            <div><i className="fas fa-map-marker-alt"></i> <Input type="text" name="City" placeholder="Edit City" ref={city}/></div>
            <div><i className="fas fa-birthday-cake"></i> <Input type="date" name="Brithday" placeholder="Edit Your Brithday" ref={brithday}/></div>
            <button onClick={onHandleClick}><i className="fas fa-backspace"></i>Cancel </button> <button onClick={changeUserDataClick}><i className="fas fa-save"></i>Save </button>
        </>
)


const Profile = () =>{

    const [editing,setEditing] = useState(false);
    const file = useRef(null);
    const city = useRef(null);
    const brithday = useRef(null);

    const changeUserDataClick = () => console.log(file.current.value,city.current.value,brithday.current.value)



    const onHandleClick =()=> setEditing(!editing);

    return(
        <ProfileSection>
            <ProfilePhoto>
                <img src="img/zdj.jpg" alt="Profile"/>
                {!editing? null: <input ref ={file}type="file"/>}
            </ProfilePhoto>
            <FullName>
                <h2>Filip Kornaus</h2>
            </FullName>
            <UserData>
                {
                    !editing?<Data onHandleClick={onHandleClick}/>:<ChangeUserData onHandleClick={onHandleClick} file={file} city={city} brithday={brithday} changeUserDataClick={changeUserDataClick}/>
                }
            </UserData>
            
        </ProfileSection>
    )
}

export default Profile;