import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://creative-agency-c2st.onrender.com/feedback`;
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
    };
    return (
        <div className='grid grid-cols-1 justify-items-center'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="pt-2">
                    <input type="text" placeholder="Your Name" {...register("name", { required: true, maxLength: 20 })} className="input w-96  input-bordered " />
                </div>
                <div className="pt-2">
                    <input type="text" placeholder='Description' {...register("description")} className="input w-96 input-bordered" />
                </div>
                <div className="pt-2">
                    <input placeholder='Photo URL' type="text"{...register("image")} className="input w-96 input-bordered" />
                </div>
                <input className='btn btn-xs sm:btn-sm md:btn-md lg:btn-wide   text-white' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Review;