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
        <div className='container' style={{ marginTop: "150px ", textAlign: 'center' }}>
            <h2>ประวัติคำสั่งซื้อ</h2>
            <div className='row justify-content-center'>
                <div className='col-md-8 mb-4'>
                    <div className='card'>
                        <div className='card-body'>
                            <table className='table table-bordered order-history-table'>
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderHistory;
