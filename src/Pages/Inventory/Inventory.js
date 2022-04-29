import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Inventory = (props) => {
    const { name, img, comment, price, supplier } = props.inventory;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} alt="" />
                <Card.Body>
                    <Card.Title><h3>{name}</h3></Card.Title>
                    <Card.Text> <p>{comment}</p> </Card.Text>
                    <Card.Text> <p> Price : ${price}</p></Card.Text>
                    <Card.Text>  <p>Seller: {supplier}</p> </Card.Text>
                    <Button variant="primary">Detail</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Inventory;