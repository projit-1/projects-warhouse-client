import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function ReadMore({ children = 300 }) {
    const text = children;
    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 300) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }
    return (
        <p>
            {result}
            <Button className="m-2" onClick={toggleIsShow}>
                {isShow ? "Read More ..." : "Read Less..."}
            </Button>
        </p>
    )
}

const Question = (props) => {
    const { title, img, answer } = props.question
    return (
        <div className='container text my-3'>
            <h6>{title}</h6>
            <img className='w-50' src={img} alt="" />
            <p> <ReadMore>{answer}</ReadMore>
            </p>

        </div>
    );
};

export default Question;