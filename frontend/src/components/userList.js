import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('/api/users')
            .then(res => setUsers(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container">
            <h2>User List</h2>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item">{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
