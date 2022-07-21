import React from "react";

const Task = (props) => {
   return (
      <>
        <li className={props.name}>
            <div className="view">
               <input className="toggle" type="checkbox" />
               <label>
                  <span className="description">{props.description}</span>
                  <span className="created"> task created {new Date().getMinutes()} minutes ago</span>
               </label>
               <button className="icon icon-edit"></button>
               <button className="icon icon-destroy"></button>               
            </div>
            {props.name === 'editing' ? <input type="text" className="edit" defaultValue="Editing task" /> : null}
         </li>
      </>
   )
}

export default Task;