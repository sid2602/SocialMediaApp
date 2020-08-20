import action from '../actions/getPosts.action'

const getPostsFetch = async(start,limit) => {
    
    const options = {credentials: 'include'}

    const response = await fetch(`/api/getPosts?start=${start}&limit=${limit}`,options);
    const json = await response.json();

    return json;
} 

const getPosts = (start,limit) => async(dispatch) =>{

    dispatch(action.loading());
   
    try{
        const posts = await getPostsFetch(start,limit);
        if(posts.success){
            dispatch(action.success(posts.posts));
        }
            
        else{
            dispatch(action.failure(posts.error));
        }
            

    }catch(err){
        console.error(err.toString());
    }
    
}

export default getPosts