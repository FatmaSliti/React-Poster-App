import PostsList from "./components/postsList"

function App() {

  const changeText = (text) => {
    console.log(text)
  }

  return (
    <main>
      <PostsList onLiftState={changeText} />
    </main>
  )
}

export default App
