import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { name, img, comment, price, supplier, stock } = props.inventory;
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
                    <p>Seller:  {supplier}</p>
                    <h6>Stock Items: {stock}</h6>
                </div>
                <div className=' updatebutton bg-primary'>
                    <div><Link to='/inventoryId'  >  <Button className='' variant="primary">Update</Button></Link></div>
                    <div>  <Link to=''  >  <Button className='' variant="primary">Delet</Button></Link></div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;