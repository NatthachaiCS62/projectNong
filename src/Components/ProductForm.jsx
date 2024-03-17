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
    <div className="container">
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
