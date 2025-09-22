// @ts-nocheck
import { useState } from 'react';
import { Calendar, Clock, Flag, Search } from 'lucide-react';

const TaskList = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Complete project proposal',
            description: 'Finish the project proposal document and send it to the client',
            priority: 'high',
            dueDate: '2023-06-15',
            completed: false
        },
        {
            id: 2,
            title: 'Team meeting',
            description: 'Weekly team meeting to discuss progress and blockers',
            priority: 'medium',
            dueDate: '2023-06-12',
            completed: true
        },
        {
            id: 3,
            title: 'Research new technologies',
            description: 'Spend 2 hours researching new frontend frameworks',
            priority: 'low',
            dueDate: '2023-06-20',
            completed: false
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const getPriorityColor = (priority) => {
        switch (priority) {
            case 'high': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
            case 'medium': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
            case 'low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
            default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
        }
    };

    const filteredTasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const toggleTaskCompletion = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Your Tasks</h2>
                <p className="text-gray-600 dark:text-gray-400">Manage your tasks and stay organized</p>
            </div>

            <div className="mb-6">
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search tasks..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                    />
                </div>
            </div>

            <div className="grid gap-4">
                {filteredTasks.map((task) => (
                    <div
                        key={task.id}
                        className={`bg-white dark:bg-gray-800 rounded-lg shadow p-4 border-l-4 ${task.priority === 'high' ? 'border-red-500' :
                                task.priority === 'medium' ? 'border-yellow-500' : 'border-green-500'
                            }`}
                    >
                        <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-3">
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => toggleTaskCompletion(task.id)}
                                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500 mt-1"
                                />
                                <div className="flex-1">
                                    <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : 'text-gray-800 dark:text-white'}`}>
                                        {task.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                        {task.description}
                                    </p>
                                    <div className="flex items-center space-x-4 mt-3">
                                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(task.dueDate).toLocaleDateString()}
                                        </div>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                                            {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredTasks.length === 0 && (
                    <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-full mb-4">
                            <Search className="h-8 w-8 text-gray-400" />
                        </div>
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No tasks found</h3>
                        <p className="text-gray-500 dark:text-gray-400">Try adjusting your search query</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TaskList;