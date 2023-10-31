import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"
import styles from './PostList.module.css'
import Modal from "./Modal"

const PostsList = ({ modalIsVisible, hideModalHandler }) => {
    const [posts, setPosts] = useState([]);

    const addPostHandler = (postData) => {
        // setPosts([postData, ...posts])
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <>
            {modalIsVisible && (
                <Modal onClose={hideModalHandler}>
                    <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
                </Modal>
            )}
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {/* <Post author='Henda' body='We are building a twitter like app!' /> */}
                    {posts.map((post) => <Post key={post.body} author={post.author} body={post.body} />)}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            ) }
        </>
    )
}

export default PostsList
