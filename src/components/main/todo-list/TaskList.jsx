import React from "react"

import Task from "./Task";

const TaskList = () => {
   return (
      <>
         <ul className="todo-list">
            <Task name="completed" description="Completed task" />
            <Task name="editing" description="Editing task" />
            <Task description="Active task" />      
         </ul>
      </>
   )
}

export default TaskList;