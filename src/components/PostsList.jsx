import { useState } from "react"
import NewPost from "./NewPost"
import Post from "./Post"
import styles from './PostList.module.css'
import Modal from "./Modal"

const PostsList = () => {
    const [enteredBody, setEnteredBody] = useState('We are building a twitter like app!');
    const [enteredAuthor, setEnteredAuthor] = useState('author name');

    const bodyChangeHandler = (event) => {
        setEnteredBody(event.target.value);
    }

    const authorChangeHandler = (event) => {
        setEnteredAuthor(event.target.value);
    }

    return (
        <>
            <Modal>
                <NewPost onBodyChange={bodyChangeHandler} onAuthorChange={authorChangeHandler} />
            </Modal>
            <ul className={styles.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author='Henda' body='We are building a twitter like app!' />
            </ul>
        </>
    )
}

export default PostsList
