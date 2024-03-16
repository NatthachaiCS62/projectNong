import React, { useState } from 'react';
import './ProductForm.css'; import './ProductForm.css';

function ProductForm() {
  const [productCode, setProductCode] = useState('');
  const [date, setDate] = useState('');
  const [shippingAddress, setShippingAddress] = useState('');
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ตรวจสอบข้อมูลและดำเนินการต่อตามต้องการ
    console.log('Submitted:', {
      productCode,
      date,
      shippingAddress,
      productName,
      quantity
    });
    // เพิ่มโค้ดส่วนนี้เพื่อส่งข้อมูลไปยังเซิร์ฟเวอร์หรือทำการบันทึกข้อมูลตามต้องการ
  };

  return (
    <div className="container"> {/* Add container class */}
      <h2>Product Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group"> {/* Add form-group class */}
          <label>Product Code:</label>
          <input type="text" value={productCode} onChange={(e) => setProductCode(e.target.value)} />
        </div>
        <div className="form-group"> {/* Add form-group class */}
          <label>Date:</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group"> {/* Add form-group class */}
          <label>Shipping Address:</label>
          <input type="text" value={shippingAddress} onChange={(e) => setShippingAddress(e.target.value)} />
        </div>
        <div className="form-group"> {/* Add form-group class */}
          <label>Product Name:</label>
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} />
        </div>
        <div className="form-group"> {/* Add form-group class */}
          <label>Quantity:</label>
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;