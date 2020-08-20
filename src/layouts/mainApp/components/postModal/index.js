import React from 'react';
import ReactDOM from 'react-dom'

import {Overlay,Modal,PostContent,UserSection,DeleteButton} from './style'
import {ProfilePhoto,FullName} from '../profile/style'

const PostModal = ({setOpenPostModal,data,userData}) => {

    const closeModal = () => setOpenPostModal(false)
    const {image,username} = data.userData

    const handleClickDeleteButton = async() => {
        const options = {credentials: 'include'}

        const response = await fetch(`/api/removePost?postId=${data._id}`,options);
        const json = await response.json();

        if(json.success){
            window.location.reload(true);
        }else{
            alert(json.error)
        }
    }

    return ReactDOM.createPortal(
        <>
            <Overlay onClick = {closeModal}/>
            <Modal>
                <PostContent>
                    <p>{data.text}</p>
                </PostContent>
                <UserSection>
                    <ProfilePhoto small>
                        <img src={`uploads/${image}`}  alt="Profile" />
                    </ProfilePhoto>
                    <FullName>
                         <h2>{username}</h2>
                    </FullName>
                    {data.userData.email === userData.email && <DeleteButton onClick={handleClickDeleteButton}>Delete post <i className="fas fa-plus"></i></DeleteButton>}
                </UserSection>
            </Modal>
        </>,
        document.getElementById('portal')
    )
}

export default PostModal;