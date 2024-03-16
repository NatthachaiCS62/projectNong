import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [email, setEmail] = useState(''); // กำหนดค่าเริ่มต้นของ email เป็น ''
    const [password, setPassword] = useState(''); // กำหนดค่าเริ่มต้นของ password เป็น ''
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const navigate = useNavigate('');
    
    const handleSubmit = async (e) => {
        e.preventDefault();
            if (email==="admin@email.com"&&password==="123123"){
                setIsLoggedIn(true);
                navigate('/');
                alert('เข้าสู่ระบบสำเร็จ');
                
            } 
    };

    return (
        <div className="login ">
            <div className='border'>
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 style={{color:'white'}}>เข้าสู่ระบบ</h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label style={{color:'white', fontSize:'18'}}>
                                    อีเมล:
                                </label>
                                <div className="mt-1">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder='email'
                                    />
                                </div>
                            </div>

                            <div>
                                <label style={{color:'white', fontSize:'18'}}>
                                    รหัสผ่าน:
                                </label>
                                <div className="mt-5" >
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        placeholder='password'
                                    />
                                </div>
                            </div>

                            {errorMessage && (
                                <p>{errorMessage}</p>
                            )}

                            <div>
                                
                                 <button
                                    type="submit"
                                    className="btn"
                                    style={{marginTop:'10px'}}
                                >
                                    เข้าสู่ระบบ
                                </button>
                               
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;