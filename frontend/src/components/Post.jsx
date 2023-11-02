import { Link } from "react-router-dom";
import styles from "./Post.module.css";

const Post = (props) => {
    // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
    return (
        <li className={styles.post}>
            <Link to={props.id}>
                <p className={styles.author}>{props.author}</p>
                <p className={styles.text}>{props.body}</p>
            </Link>
        </li>
    );
};

export default Post;
