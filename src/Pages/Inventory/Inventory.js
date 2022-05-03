import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { name, img, comment, price, supplier, stock } = props.inventory;
    return (
        <div>
            <Card className='inventory-contaoner  mx-auto' >
                <Card.Img className='w-50 mx-auto' variant="top" src={img} alt="" />
                <Card.Body className='container'>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text> <p>{comment}</p>  </Card.Text>
                    <Card.Text> <h4> Price : ${price}</h4></Card.Text>
                    <Card.Text> <h5>Seller: {supplier}</h5> </Card.Text>
                    <Card.Text> <h5>Stock Items:{stock}</h5> </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-primary'>
                    <Link to='/inventories'  >  <Button variant="primary">Stock Update</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Inventory;