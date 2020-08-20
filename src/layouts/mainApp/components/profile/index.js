import React,{useState,useRef} from 'react';

import {ProfileSection,ProfilePhoto,FullName,UserData,Input} from './style'

import {connect} from 'react-redux';
import userData from '../../../../data/operations/userData.operation'
import Loader from '../../../signComponents/loader'


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
                <i className="fas fa-signature"></i><Input type="text" placeholder="Edit Username" ref={username} name="username"/>
            </FullName>
            <UserData>
                <div><i className="fas fa-map-marker-alt"></i> <Input type="text" name="city" placeholder="Edit City" ref={city}/></div>
                <div><i className="fas fa-birthday-cake"></i> <Input type="date" name="brithday" placeholder="Edit Your Brithday" ref={brithday}/></div>
                <button onClick={onHandleClick}><i className="fas fa-backspace"></i>Cancel </button> <button type="submit"><i className="fas fa-save"></i>Save </button>
            </UserData>
        </>
)


const Profile = ({data,loading,userData}) =>{

    const [editing,setEditing] = useState(false);
    const [imageIsLoaded,setImageLoaded] = useState(false);

    const file = useRef(null);
    const username = useRef(null);
    const city = useRef(null);
    const brithday = useRef(null);

    const onHandleClick =()=> setEditing(!editing);


    const onHandleSubmit = async (e) =>{
        e.preventDefault();
        const formData = new FormData();

        formData.append('profileImage',file.current.files[0])
        formData.append('username',username.current.value);
        formData.append('city',city.current.value);
        formData.append('brithday',brithday.current.value);
        
        const options = {
            method: 'POST',
            credentials: 'include',
            headers: {
            'enctype':"multipart/form-data"
            },
            body: formData
        }

        const response = await fetch('/api/updateProfile',options)
        const json = await response.json();
        
        if(json.success)
            window.location.reload();
        else alert(json.error)
     
    }


    return(
        <ProfileSection>
            <form onSubmit={(e)=>onHandleSubmit(e)}>
            {loading? <Loader/>:<>
                <ProfilePhoto>
                     <img src={`uploads/${data.image}`} className ={imageIsLoaded? null: "loading"} onLoad={()=>setImageLoaded(true)}alt="Profile" /> 
                     {!imageIsLoaded? <Loader/> : null}
                    {!editing? null: <input ref ={file}type="file" name="profileImage"/>}
                </ProfilePhoto>
                {
                    !editing?<Data onHandleClick={onHandleClick} data={data}/>:<ChangeUserData onHandleClick={onHandleClick} file={file} city={city} brithday={brithday} username={username} />
                }
            </>
            } 
           </form>
        
            
        </ProfileSection>
    )
}

const mapStateToProps = state =>({
    data: state.userDataReducer.data,
    loading: state.userDataReducer.loading,     
})

const mapDispatchToProps = dispatch => ({
    userData: ()=>dispatch(userData())
})

const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(Profile);

export default ConectedApp;