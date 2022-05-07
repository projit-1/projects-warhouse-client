import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Addinventories from '../AddInventories/Addinventories';

const InventoryId = () => {
    const { inventoryId } = useParams();
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        const url = ` http://localhost:5000/inventory/${inventoryId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))

    }, [])

    return (
        <div>
            <h3>Inventory Id :{inventoryId}</h3>
            <h3>Name :{inventory.name}</h3>
            <div className='shippingButton my-2'>
                <div className='my-2'>  <Button className=''>Shipping</Button></div>
                <div> <Link to='/inventories'  > <Button className='' variant="primary">Manage Inventory</Button></Link></div>
            </div>
            <Addinventories></Addinventories>
        </div>
    );
};

export default InventoryId;