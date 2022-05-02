import React from 'react';
import { Button } from 'react-bootstrap';

const Question = (props) => {
    const { title, img, answer } = props.question
    return (
        <div className='container text my-3'>
            <h6>{title}</h6>
            <img className='w-50' src={img} alt="" />
            <p> {answer.slice()} <Button>Read More...</Button>
            </p>

        </div>
    );
};

export default Question;