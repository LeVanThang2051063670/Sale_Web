import React, { useState } from 'react';
import './LoginForm.css';
import { FaUser, FaLock } from 'react-icons/fa';

const LoginForm = () => {
    const [action, setAction] = useState('Login');

    const toggleAction = () => {
        setAction((prevAction) => (prevAction === 'Login' ? 'Register' : 'Login'));
    };

    return (
        <div className="wrapper">
            <form action="">
                <h1>{action}</h1>
                <div className="input-box">
                    <input type="text" placeholder="Username" required />
                    <FaUser className="icon" />
                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required />
                    <FaLock className="icon" />
                </div>

                <div className="remember-forgot">
                    <label>
                        <input type="checkbox" />Remeber me
                    </label>
                    <a href="#">Forgot password ?</a>
                </div>

                <button type="submit">{action}</button>

                <div className="register-link">
                    <p>
                        {action === 'Login' ? "Don't have an account?" : 'Already have an account?'}
                        <a href="#" onClick={toggleAction}>
                            {action === 'Login' ? 'Register' : 'Login'}
                        </a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
