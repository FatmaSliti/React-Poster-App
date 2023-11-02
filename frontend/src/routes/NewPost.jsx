import classes from "./NewPost.module.css";
import Modal from "../components/Modal";
import { Link, Form, redirect } from "react-router-dom";

function NewPost() {
    // const [enteredBody, setEnteredBody] = useState("");
    // const [enteredAuthor, setEnteredAuthor] = useState("");

    // const bodyChangeHandler = (event) => {
    //     setEnteredBody(event.target.value);
    // };

    // const authorChangeHandler = (event) => {
    //     setEnteredAuthor(event.target.value);
    // };

    // const submitHandler = (event) => {
    //     event.preventDefault();

    //     const postData = {
    //         body: enteredBody,
    //         author: enteredAuthor,
    //     };

    //     // props.onAddPost(postData);

    //     // props.onCancel(); //to hide the form after it was submitted
    // };

    return (
        <Modal>
            <Form method="post" className={classes.form}> {/* with 'Form' react router will handle the form submission /prevent the browser default of sending a req / still gather the input data / generate an object with that data / call the action assigned to the route which contains the 'F'orm  */}
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea
                        id="body"
                        name="body"
                        required
                        rows={3}
                    />
                </p>
                <p>
                    <label htmlFor="name">Your name</label>
                    <input
                        type="text"
                        id="name"
                        name="author"
                        required
                    />
                </p>
                <p className={classes.actions}>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                    <button>Submit</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export async function action({ request }) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData); // { body: '...', author: '...' }

    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    return redirect('/');
}
