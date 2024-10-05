import React from 'react';
import TaskList from './components/TaskList';  // Component that handles tasks
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap styles

function App() {
    const userId = 1;  // Hardcoded for now, replace with dynamic user ID after authentication

    return (
        <div className="App">
            <div className="container">
                <h1 className="my-4 text-center">Task Management App</h1>
                <TaskList userId={userId} />
            </div>
        </div>
    );
}

export default App;
