import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderHistory = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h2>ประวัติคำสั่งซื้อ</h2>
            <table>
                <thead>
                    <tr>
                        <th>รหัสสินค้า</th>
                        <th>วันที่</th>
                        <th>ที่อยู่จัดส่ง</th>
                        <th>ชื่อสินค้า</th>
                        <th>จำนวน</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product._id}>
                            <td>{product.productCode}</td>
                            <td>{product.date}</td>
                            <td>{product.shippingAddress}</td>
                            <td>{product.productName}</td>
                            <td>{product.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderHistory;
