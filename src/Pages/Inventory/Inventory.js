import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Inventory = (props) => {
    const { name, img, comment, price, supplier, stock } = props.inventory;
    return (
        <div>
            <Card className='inventory-contaoner' >
                <Card.Img variant="top" src={img} alt="" />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text> <p>{comment}</p>  </Card.Text>
                    <Card.Text> <p> Price : ${price}</p></Card.Text>
                    <Card.Text> <p>Seller: {supplier}</p> </Card.Text>
                    <Card.Text> <p>Stock Items:{stock}</p> </Card.Text>
                </Card.Body>
                <Card.Footer className='bg-primary'>
                    <Link to='/inventories'  >  <Button variant="primary">Stock Update</Button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default Inventory;