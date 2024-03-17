import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    axios.post('/logout', {}).then(() => navigate('/login'));
  };

  return (
    <div className="header-container">
      <header className="header bg-blue-500 text-white">
        <Link style={{ textDecoration: 'none', color: 'white' }} to='/'>
          <h1 className="">ร้านครูทัศตั๊กแตนทอด</h1>
        </Link>
        <nav className="navbar">
          <ul className="flex space-x-4">
            <li>
              <Link to='/'>
                <button className="btn">หน้าหลัก</button>
              </Link>
            </li>
            <li>
              <Link to='/product-form'>
                <button className="btn">เพิ่มประวัติการซื้อ</button>
              </Link>
            </li>
            <li>
              <Link to='/producthistory'>
                <button className="btn">ประวัติการซื้อ</button>
              </Link>
            </li>
            <li>
              <Link>
                <button className="btn">แก้ไขรายการ</button>
              </Link>
            </li>
            <li>
              {isLoggedIn ? (
                <button className="btn" onClick={handleLogout}>ออกจากระบบ</button>
              ) : (
                <Link to="/login">
                  <button className="btn">เข้าสู่ระบบ</button>
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </header>
    </div >
  );
}

export default Navbar;
