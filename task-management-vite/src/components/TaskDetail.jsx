import React from "react";
import { data, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function TaskDetail() {

    
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

const { id } = useParams(); 
const desc = [...dataSet].find(obj => obj.postId == id);

if (!desc) {
    return (
        <div>
            <h2>Task Not Found</h2>
            <button><Link to="/">Back to Main</Link></button>
        </div>
    )
    
}

 return (
 <div>
   <h1>Task Details</h1>
   <h2>{desc.title}</h2>
   <p>{desc.description}</p>
   <button><Link to="/">Back to Main</Link></button>
 </div>
 );
}

export default TaskDetail;