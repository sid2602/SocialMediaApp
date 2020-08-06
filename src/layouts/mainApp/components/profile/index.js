import React,{useState,useRef} from 'react';

import {ProfileSection,ProfilePhoto,FullName,UserData,Input} from './style'

import {connect} from 'react-redux';

const Data = ({onHandleClick,data}) => (
    <>
        <FullName>
                <h2>{data.username}</h2>
        </FullName>
        <UserData>
            <div><i className="fas fa-map-marker-alt"></i>{data.city}</div>
            <div><i className="fas fa-birthday-cake"></i>{data.brithday}</div>
            <button onClick={onHandleClick} ><i className="fas fa-pencil-alt"></i>Edit Profile </button>
        </UserData>
    </>
)

const ChangeUserData = ({onHandleClick,city,brithday,username}) =>(
        <>
            <FullName>
                <i className="fas fa-signature"></i><Input type="text" placeholder="Edit Username" ref={username}/>
            </FullName>
            <UserData>
                <div><i className="fas fa-map-marker-alt"></i> <Input type="text" name="City" placeholder="Edit City" ref={city}/></div>
                <div><i className="fas fa-birthday-cake"></i> <Input type="date" name="Brithday" placeholder="Edit Your Brithday" ref={brithday}/></div>
                <button onClick={onHandleClick}><i className="fas fa-backspace"></i>Cancel </button> <button type="submit"><i className="fas fa-save"></i>Save </button>
            </UserData>
        </>
)
const Profile = ({data}) =>{

    const [editing,setEditing] = useState(false);
    const file = useRef(null);
    const username = useRef(null);
    const city = useRef(null);
    const brithday = useRef(null);

    const onHandleClick =()=> setEditing(!editing);


    const onHandleSubmit = (e) =>{
        e.preventDefault();
        console.log(file.current.value,city.current.value,brithday.current.value)
        console.log("SUBMITING")
    }


    return(
        <ProfileSection>
            <form onSubmit={(e)=>onHandleSubmit(e)}>
            <ProfilePhoto>
                <img src="img/zdj.jpg" alt="Profile"/>
                {!editing? null: <input ref ={file}type="file"/>}
            </ProfilePhoto>
            {
                !editing?<Data onHandleClick={onHandleClick} data={data}/>:<ChangeUserData onHandleClick={onHandleClick} file={file} city={city} brithday={brithday} username={username} />
            }
           </form>
            
        </ProfileSection>
    )
}

const mapStateToProps = state =>({
    data: state.userDataReducer.data,
    loading: state.userDataReducer.loading, 
    
})

const ConectedApp = connect(mapStateToProps,null)(Profile);

export default ConectedApp;