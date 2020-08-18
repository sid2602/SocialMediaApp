import React , {useEffect,useState,useRef,useCallback} from 'react';
//components
import Navigation from './components/navigation'
import Profile from './components/profile'
import AddPost from './components/addPost'
import Post from './components/post'
import Loader from '../signComponents/loader'

//styles
import {Container,PostsWrapper} from './style'

//redux
import {connect} from 'react-redux';
import userData from '../../data/operations/userData.operation'
import getPosts  from '../../data/operations/getPosts.operation'

// to DO

// Add coments

const MainApp = ({getUserData,getPosts,posts,postsLoading,getPostsSuccess,addNewPostSuccess,userData}) => {

    //Open addPost modal
    const [openAddPostModal, setOpenAddPostModal] = useState(false)

    const [numberOfPost,setNumberOfPost] = useState(1);

    //limit of posts

    const postsLimit = 5;

    //infinity scroll
    const observer = useRef();
    const lastPost = useCallback(node => {
      if(postsLoading) return;
      if(observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries =>{
        if(entries[0].isIntersecting && getPostsSuccess){

          getPosts(numberOfPost,postsLimit);
          setNumberOfPost(numberOfPost+postsLimit);
    
        }
      })
      if(node) observer.current.observe(node)
    },[postsLoading,numberOfPost,getPosts,getPostsSuccess])

    

    //Get user data and posts    

    useEffect(()=>{

        getUserData();
        getPosts(0,postsLimit);
        setNumberOfPost(5);



      },[getUserData,getPosts,setNumberOfPost,addNewPostSuccess])
      //display posts

    const displayPosts = posts.map((post,index) =>{
      
      if(index+1 === posts.length)
        return <div key={post._id} ref={lastPost}><Post data={post} setOpenPostModal={setOpenAddPostModal} userData={userData}/> </div>
      else 
        return <Post data={post} key={post._id} setOpenPostModal={setOpenAddPostModal} userData={userData}/>

  })

    return(
        <>
            <Navigation setOpenAddPostModal={setOpenAddPostModal} />
            <Container>
              <Profile/>
              <PostsWrapper>
                
                <AddPost setOpenAddPostModal={setOpenAddPostModal} openAddPostModal={openAddPostModal} />

                {posts && displayPosts}
                {postsLoading && <Loader/>}

              </PostsWrapper>
              
            </Container>
            
            
        </>
    )
}

//redux

const mapStateToProps = state => ({
  postsLoading: state.getPosts.loading,
  getPostsSuccess: state.getPosts.success,
  getPostsError: state.getPosts.errorr,
  addNewPostSuccess: state.addNewPost.success,
  posts: state.getPosts.posts,
  userData: state.userDataReducer.data
})

const mapDispatchToProps = dispatch =>({
  getUserData: ()=>dispatch(userData()),
  getPosts: (start,limit)=>dispatch(getPosts(start,limit)),
})


const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(MainApp);

export default ConectedApp;