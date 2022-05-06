import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Inventory = ({ inventory }) => {
    const { _id, name, img, comment, price, supplier, stock } = inventory;
    const navigate = useNavigate();

    const navigateToInventoryId = id => {
        navigate(`/inventory/ ${id}`);
    }

    return (
        <div>
            <div className='inventory-contaoner w-100   mx-auto shadow-lg p-2 mb-2 bg-body rounded-3' >
                <div>
                    <img className=' inventoryimg mx-auto' src={img} alt="" />
                </div>
                <div className='container w-100 mx-auto'>
                    <h6 >{name}</h6>
                    <p > <small>{comment}</small></p>
                    <p> Price : ${price}</p>
                    <p>Seller:{supplier}</p>
                    <h6>Stock Items: {stock}</h6>
                </div>
                <div className=' updatebutton bg-primary'>
                    <div>
                        <Button onClick={() => navigateToInventoryId(_id)}>Update</Button>
                    </div>
                    <div>  <Link to='/inventories'  >  <Button className='' variant="primary">Delet</Button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;