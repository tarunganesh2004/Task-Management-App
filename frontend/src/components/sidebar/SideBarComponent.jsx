// @ts-nocheck
import { useState, useEffect } from 'react';
import {
    LayoutDashboard,
    PlusCircle,
    Edit3,
    Trash2,
    LogOut,
    Sun,
    Moon,
    Menu,
    X,
    ChevronLeft
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useTheme } from '../../contexts/ThemeContext';

const Sidebar = ({ activeView, setActiveView }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { user, logout } = useAuth();
    const { isDark, toggleTheme } = useTheme();

    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'add', label: 'Add Task', icon: PlusCircle },
        { id: 'edit', label: 'Edit Tasks', icon: Edit3 },
        { id: 'delete', label: 'Delete Tasks', icon: Trash2 },
    ];

    const toggleSidebar = () => setIsOpen(!isOpen);
    const closeSidebar = () => setIsOpen(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.sidebar-container')) {
                closeSidebar();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={toggleSidebar}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-white dark:bg-gray-800 shadow-md"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={closeSidebar}
                ></div>
            )}

            {/* Sidebar */}
            <div className={`
        sidebar-container fixed inset-y-0 left-0 z-50 bg-white dark:bg-gray-800 shadow-xl transform transition-all duration-300 ease-in-out
        lg:relative lg:z-auto lg:translate-x-0
        ${isOpen ? 'translate-x-0 w-64' : '-translate-x-full lg:translate-x-0'}
        ${isCollapsed ? 'lg:w-20' : 'lg:w-64'}
      `}>
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                        {!isCollapsed && (
                            <h1 className="text-xl font-bold text-gray-800 dark:text-white">Task Manager</h1>
                        )}
                        <button
                            onClick={toggleCollapse}
                            className="hidden lg:flex p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                        >
                            <ChevronLeft className={`h-5 w-5 text-gray-600 dark:text-gray-400 transition-transform ${isCollapsed ? 'rotate-180' : ''}`} />
                        </button>
                    </div>

                    {/* User info */}
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                        {!isCollapsed ? (
                            <>
                                <p className="text-sm text-gray-800 dark:text-white font-medium truncate">Welcome, {user?.username}</p>
                                <p className="text-xs text-gray-600 dark:text-gray-400 truncate">{user?.email}</p>
                            </>
                        ) : (
                            <div className="flex justify-center">
                                <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                                    <span className="text-white text-sm font-medium">
                                        {user?.username?.charAt(0).toUpperCase()}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 p-4">
                        <ul className="space-y-2">
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <li key={item.id}>
                                        <button
                                            onClick={() => {
                                                setActiveView(item.id);
                                                closeSidebar();
                                            }}
                                            className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors group ${activeView === item.id
                                                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-200'
                                                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                                                }`}
                                            title={isCollapsed ? item.label : ''}
                                        >
                                            <Icon size={20} className="flex-shrink-0" />
                                            {!isCollapsed && <span className="ml-3">{item.label}</span>}
                                            {isCollapsed && (
                                                <div className="absolute left-full ml-2 px-2 py-1 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                                    {item.label}
                                                </div>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>

                    {/* Footer */}
                    <div className="p-4 border-t border-gray-200 dark:border-gray-700 space-y-4">
                        <div className="flex items-center justify-between">
                            {!isCollapsed && (
                                <span className="text-sm text-gray-600 dark:text-gray-400">Theme</span>
                            )}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                                title={isCollapsed ? (isDark ? 'Switch to light mode' : 'Switch to dark mode') : ''}
                            >
                                {isDark ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        </div>
                        <button
                            onClick={logout}
                            className="w-full flex items-center justify-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                            title={isCollapsed ? 'Logout' : ''}
                        >
                            <LogOut size={18} />
                            {!isCollapsed && <span className="ml-2">Logout</span>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Sidebar;