import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EditProduct from './EditProduct';

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

    const handleUpdate = updatedProduct => {
        const updatedProducts = products.map(product => {
            if (product._id === updatedProduct._id) {
                return updatedProduct;
            }
            return product;
        });
        setProducts(updatedProducts);
    };

    const handleDelete = productId => {
        const removeProducts = products.filter(product => product._id !== productId);
        setProducts(removeProducts);
    };

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
                                        <th>แก้ไข/ลบ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <EditProduct key={product._id} product={product} onUpdate={handleUpdate} onDelete={handleDelete} />
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
