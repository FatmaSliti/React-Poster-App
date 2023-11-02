import Post from "./Post";
import styles from "./PostList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
    const posts = useLoaderData();

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         setIsFetching(true)
    //         const response = await fetch('http://localhost:8080/posts')
    //         const resData = await response.json();
    //         setPosts(resData.posts);
    //         setIsFetching(false);
    //     }
    //     fetchPosts();
    // }, []);

    // const addPostHandler = (postData) => {
    //     fetch("http://localhost:8080/posts", {
    //         method: "POST",
    //         body: JSON.stringify(postData),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //     });
    //     setPosts((existingPosts) => [postData, ...existingPosts]);
    // };

    return (
        <>
            {posts.length > 0 && (
                <ul className={styles.posts}>
                    {/* <Post author='Fatma' body='We are building a twitter like app!' /> */}
                    {posts.map((post) => (
                        <Post key={post.id} id={post.id} author={post.author} body={post.body} />
                    ))}
                </ul>
            )}
            {posts.length === 0 && (
                <div style={{ textAlign: "center", color: "white" }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            
        </>
    );
};

export default PostsList;
