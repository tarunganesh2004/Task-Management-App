const EditTask = () => {
    return (
        <div className="p-6">
            <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Edit Tasks</h2>
                <p className="text-gray-600 dark:text-gray-400">Select a task to edit its details</p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Edit Tasks Interface</h3>
                <p className="text-gray-500 dark:text-gray-400">This section will allow you to modify existing tasks</p>
            </div>
        </div>
    );
};

export default EditTask;