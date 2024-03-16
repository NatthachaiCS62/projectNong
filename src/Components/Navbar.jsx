// src/Components/Navbar.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    // เมื่อคลิกที่ปุ่ม "ออกจากระบบ" เปลี่ยนสถานะ isLoggedIn เป็น false
    setIsLoggedIn(true);
  };

  return (
    <div className="header-container">
      <header className="header bg-blue-500 text-white">
        <h1 className="text-lg font-bold text-yellow-300">ร้านครูทัศตั๊กแตนทอด</h1>
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
              <Link>
                <button className="btn">บันทึก</button>
              </Link>
            </li>
            <li>
              <Link>
                <button className="btn">แก้ไขรายการ</button>
              </Link>
            </li>
            <li>
              {/* เช็คสถานะ isLoggedIn เพื่อเปลี่ยนปุ่ม */}
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
    </div>
  );
}

export default Navbar;

