import React , {useEffect,useState,useRef,useCallback} from 'react';
//components
import Navigation from './components/navigation'
import Profile from './components/profile'
import AddPost from './components/addPost'
import Post from './components/post'
import Loader from '../../components/loader'

//styles
import {Container,PostsWrapper} from './style'

//redux
import {connect} from 'react-redux';
import userData from '../../data/operations/userData.operation'
import getPosts  from '../../data/operations/getPosts.operation'
import postsActions from '../../data/actions/getPosts.action'

// to DO

// Add likes
// Add coments
// add remove posts
// add Pop up posts
// image load 


const MainApp = ({userData,getPosts,posts,postsLoading,getPostsSuccess,addNewPostSuccess,resetPosts}) => {



    //Open modal
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

        userData();

        if(addNewPostSuccess === true){
          resetPosts()
        }

        getPosts(0,postsLimit);
        setNumberOfPost(5);



      },[userData,getPosts,setNumberOfPost,addNewPostSuccess,resetPosts])
    
      //display posts

    const displayPosts = posts.map((post,index) =>{
      

      if(index+1 === posts.length)
        return <div key={post._id} ref={lastPost}><Post data={post} /> </div>
      else 
        return <Post data={post} key={post._id}/>

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
  posts: state.getPosts.posts
})

const mapDispatchToProps = dispatch =>({
  userData: ()=>dispatch(userData()),
  getPosts: (start,limit)=>dispatch(getPosts(start,limit)),
  resetPosts: ()=>dispatch(postsActions.reset())
})


const ConectedApp = connect(mapStateToProps,mapDispatchToProps)(MainApp);

export default ConectedApp;