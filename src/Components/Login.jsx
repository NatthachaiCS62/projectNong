import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/config';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user] = useSignInWithEmailAndPassword(auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(email, password);
            navigate('/');
            alert('เข้าสู่ระบบสำเร็จ');
        } catch (error) {
            alert('เข้าสู่ระบบไม่สำเร็จ');
            console.error('Error signing in:', error);
        }
    };

    console.log(user);

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">
                    Sign In
                </button>
            </form>
        </div>
    );
}

export default Login;