import { useState } from "react";
import MainHeader from "./components/MainHeader";
import PostsList from "./components/postsList";

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  const showModalHandler = () => {
    setModalIsVisible(true);
  }

  const hideModalHandler = () => {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList modalIsVisible={modalIsVisible} hideModalHandler={hideModalHandler} />
      </main>
    </>
  )
}

export default App
