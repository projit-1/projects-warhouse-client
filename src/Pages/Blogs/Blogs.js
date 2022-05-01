import React, { useEffect, useState } from 'react';
import Question from './Question';
import './Blogs.css'

const Blogs = () => {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        fetch("questions.json")
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    return (
        <div className='blogs'>
            {
                questions.map(question => <Question
                    key={question.id}
                    question={question}
                ></Question>)
            }


        </div>
    );
};

export default Blogs;