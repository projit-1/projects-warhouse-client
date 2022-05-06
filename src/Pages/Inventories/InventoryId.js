import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const InventoryId = () => {
    const { inventoryId } = useParams();

    return (
        <div>
            <h3>id :{inventoryId}</h3>

            <div className='shippingButton my-2'>
                <div className='my-2'>  <Button className=''>Shipping</Button></div>
                <div> <Link to='/inventories'  > <Button className='' variant="primary">Manage Inventory</Button></Link></div>
            </div>
            <div className="manageinventories mx-auto sticky-top">
                <h2>Manage Inventories</h2>
                <div className='inputinventories my-2 mx-auto'>
                    <input className=' inputinventories my-2' type="text" placeholder='name' />
                    <input className=' inputinventories my-2' type="text" placeholder='comment' />
                    <input className=' inputinventories  my-2' type="text" placeholder='name' />
                    <Button className='w-50 mx-auto'>Submit</Button>

                </div>
            </div>

        </div>
    );
};

export default InventoryId;