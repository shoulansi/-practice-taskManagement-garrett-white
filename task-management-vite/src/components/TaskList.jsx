import { Link } from "react-router-dom";



export default function TaskList() { 

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

    
    return (
        <div>
            <h3>Task List!</h3>
            <ul>{dataSet.map(task => <li><Link to={`/post/${task.postId}`}>{task.title}</Link></li>)}</ul>
        </div>
    );
}
