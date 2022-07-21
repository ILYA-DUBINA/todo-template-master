import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import NewTaskForm from './components/header/NewTaskForm';
import Footer from './components/main/footer/Footer';
import TaskList from './components/main/todo-list/TaskList';

const AppContent = () =>{
   return (
      <>
         <NewTaskForm />
         <section className="main">
            <TaskList />
            <Footer />
         </section>
      </>
   );
}

const root = ReactDOM.createRoot(document.querySelector('.todoapp'));
root.render(<AppContent/>);

