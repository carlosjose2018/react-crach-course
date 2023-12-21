import NewPost from "./NewPost"
import Post from "./Post"
import classe from "./PostList.module.css"

const PostList = () => {
  return (
    <> 
    <NewPost/>
    <ul className={classe.posts}>
      <Post author="Maximilian" body="React.js is awesome"/>
      <Post author="Maximilian" body="React.js is awesome"/>
    </ul>
    </>
   
  )
}

export default PostList
