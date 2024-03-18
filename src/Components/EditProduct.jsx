import React, { useState } from 'react';
import axios from 'axios';

const EditProduct = ({ product, onUpdate, onDelete }) => {
    const [editedProduct, setEditedProduct] = useState(product);

    const handleInputChange = e => {
        const { name, value } = e.target;
        setEditedProduct({ ...editedProduct, [name]: value });
    };

    const handleUpdate = () => {
        axios.put(`http://localhost:5000/api/products/${editedProduct._id}`, editedProduct)
            .then(response => {
                onUpdate(response.data);
            })
            .catch(error => {
                console.error('Error updating product:', error);
            });
    };

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/api/products/${editedProduct._id}`, editedProduct)
        .then(response => {
            onDelete(editedProduct._id);
            console.log(response)
        })
            .catch(error => {
                console.error('Error deleting product:', error);
            });
    };


    return (
        <tr>
            <td><input type="text" name="productCode" value={editedProduct.productCode} onChange={handleInputChange} /></td>
            <td><input type="text" name="date" value={editedProduct.date} onChange={handleInputChange} /></td>
            <td><input type="text" name="shippingAddress" value={editedProduct.shippingAddress} onChange={handleInputChange} /></td>
            <td><input type="text" name="productName" value={editedProduct.productName} onChange={handleInputChange} /></td>
            <td><input type="number" name="quantity" value={editedProduct.quantity} onChange={handleInputChange} /></td>
            <td>
                <button onClick={handleUpdate}>บันทึก</button>
                <button onClick={handleDelete}>ลบ</button>
            </td>
        </tr>
    );
};

export default EditProduct;
