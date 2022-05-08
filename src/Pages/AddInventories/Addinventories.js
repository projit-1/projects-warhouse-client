import React from 'react';
import { useForm } from "react-hook-form";

const Addinventories = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://still-lowlands-96923.herokuapp.com/inventory`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }
    return (
        <div>
            <h3>Manage Inventories</h3>
            <form className='w-50 mx-auto d-flex flex-column my-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='product name' {...register("name", { required: true })} />
                <input className='mb-2' placeholder='photo url' type="text" {...register("img")} />
                <textarea className='mb-2' placeholder='description'  {...register("comment")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input type="submit" value="Add Inventories" />
            </form>
        </div>
    );
};

export default Addinventories;