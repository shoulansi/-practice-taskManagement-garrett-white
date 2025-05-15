import { useParams } from "react-router-dom";



export default function TaskList() { 
    
    const {postId} = useParams();
    

const dataSet = [
    {
        postId: 1,
        title: "Wash the Dishes",
        description: "Cole, wash your dishes"
    },
    {
        postId: 2,
        title: "Catch Up On Work",
        description: "We're all behind",
    },
    {
        postId: 3,
        title: "Watch Spongebob",
        description: "Give me the formuoli"
    }
];

const postContent = dataSet.map(task => <li><a href="/post/">{task.title}</a></li>);
    
    return (
        <div>
            <h3>Task List!</h3>
            <ul>{postContent}</ul>
        </div>
    );
}

// <header><h1>Tasks To Do</h1></header>
  //  <ul><li><a href="/post/1">adsasdasd</a></li></ul>