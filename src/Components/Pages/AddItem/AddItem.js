import React from 'react';
import './AddItem.css';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../firebase/firebase.init';

const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        console.log(data);

        const url = `https://blooming-mountain-38206.herokuapp.com/services`;

        fetch(url, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                toast("Item added successful");
                e.target.reset();
            })

    };

    return (
        <div className='w-50 mx-auto py-4'>
            <h2 className='text-center my-3'>Add New Item</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">
                <input className='mb-3' placeholder='name' {...register("name")} required />
                <input className='mb-3' placeholder='email' {...register("email")} value={user.email} readOnly required />
                <input className='mb-3' placeholder='Price' type="number" {...register("price")} required />
                <input className='mb-3' placeholder='quantity' type="number" {...register("quantity")} required />
                <input className='mb-3' placeholder='supplier' {...register("supplier")} required />
                <textarea className='mb-3' placeholder='description' {...register("description")} required />
                <input className='mb-3' placeholder='img' {...register("img")} required />
                <input className='main-button' type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;