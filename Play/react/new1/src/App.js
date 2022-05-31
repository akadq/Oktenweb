import React, {useState} from "react";
import './styles/App.css';
import PostList from "./Components/PostList";
import MyButton from "./Components/UI/button/MyButton";
import MyInput from "./Components/UI/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'Description'},
        {id: 2, title: 'JavaScript 2', body: 'Description'},
        {id: 3, title: 'JavaScript 3', body: 'Description'}
    ])

    return (
        <div className="App">
            <form>
                <MyInput type="text" placeholder="Name of the post"/>
                <MyInput type="text" placeholder="Description"/>
                <MyButton>Create new post</MyButton>
            </form>
            <PostList posts={posts} title="Posts list first"/>
        </div>
    );
}

export default App;
