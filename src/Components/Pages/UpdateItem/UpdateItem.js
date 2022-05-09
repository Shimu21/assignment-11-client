import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Update = () => {
    const { register, handleSubmit } = useForm();
    const { id } = useParams();
    const onSubmit = async (updatedUser, e) => {
        const url = `https://blooming-mountain-38206.herokuapp.com/services/${id}`;
        await fetch(url, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                toast('Item updated successful');
                e.target.reset();
            });

    }
    return (
        <div className='w-50 mx-auto py-4'>
            <h4 className='text-center my-3'>Updated Items</h4>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-3' placeholder='Name' {...register("name")} required />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} required />
                <input className='mb-3' placeholder='supplier' {...register("supplier")} required />
                <textarea className='mb-3' placeholder='description' {...register("description")} required />
                <input className='mb-3' placeholder='img' {...register("img")} required />
                <input className="btn btn-primary" type="submit" value="update item" />
            </form>
        </div>
    );
};

export default Update;