import React, { useState } from 'react';
import axios from 'axios';
import './ProductForm.css';

const initialstate = {
  productCode: "",
  date: "",
  shippingAddress: "",
  productName: "",
  quantity: "",
};

function ProductForm() {
  const [values, setValues] = useState(initialstate);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    const { name, value } = e.target;
    if (name === 'quantity' && parseInt(value) < 1) {
      // ถ้า value น้อยกว่า 1 ให้กำหนดให้มีค่าเป็น 1
      setValues({ ...values, [name]: 1 });
    } else {
      // ถ้าไม่ใช่ หรือ value มีค่ามากกว่าหรือเท่ากับ 1 ให้กำหนดค่าตามปกติ
      setValues({ ...values, [name]: value });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/products', values);
      console.log(response.data);
      setValues(initialstate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="contained">
      <h2>Product Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Product Code:</label>
          <input type="text" name="productCode" value={values.productCode} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Date:</label>
          <input type="date" name="date" value={values.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Shipping Address:</label>
          <input type="text" name="shippingAddress" value={values.shippingAddress} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Product Name:</label>
          <input type="text" name="productName" value={values.productName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Quantity:</label>
          <input type="number" name="quantity" value={values.quantity} onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ProductForm;
