import React from 'react';
import 'antd/dist/antd.css';
import { Header, Products } from './style';
import TableProducts from './components/products';

export default function Dashboard() {
    return (
        <Header >
            <Products>
                <TableProducts />
            </Products>
        </Header>
    
    )
}
