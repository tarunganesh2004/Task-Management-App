import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Sidebar from './components/sidebar/SideBarComponent';
import TaskList from './components/tasks/TaskList';
import AddTask from './components/tasks/AddTask';
import EditTask from './components/tasks/EditTask';
import './styles/themes.css';
import AnimatedBackground from './components/AnimatedBackground';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [activeView, setActiveView] = useState('dashboard');

  if (!isAuthenticated) {
    return (
      <>
        <AnimatedBackground />
        {isLogin ? (
          <Login onToggleForm={() => setIsLogin(false)} />
        ) : (
          <Register onToggleForm={() => setIsLogin(true)} />
        )}
      </>
    );
  
  }

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <TaskList />;
      case 'add':
        return <AddTask />;
      case 'edit':
        return <EditTask />;
      case 'delete':
        return (
          <div className="p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Delete Tasks</h2>
              <p className="text-gray-600 dark:text-gray-400">Select tasks to delete</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full mb-4">
                <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">Delete Tasks Interface</h3>
              <p className="text-gray-500 dark:text-gray-400">This section will allow you to remove tasks</p>
            </div>
          </div>
        );
      default:
        return <TaskList />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <main className="flex-1 overflow-y-auto lg:ml-0">
        {renderContent()}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;