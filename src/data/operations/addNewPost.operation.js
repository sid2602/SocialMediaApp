import action from '../actions/addNewPost.action'

const addPostFetch = async(data) => {
    const response = await fetch('/api/addPost', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      });
    const json = await response.json();
    return json;
} 

const addPost = data => async(dispatch) =>{

    dispatch(action.loading());
    
    try{
        const post = await addPostFetch(data);
        if(post.success){
            
            dispatch(action.success());
            
        }
            
        else{
            dispatch(action.failure(post.error));
        }
            

    }catch(err){
        console.error(err.toString());
    }
    
}

export default addPost