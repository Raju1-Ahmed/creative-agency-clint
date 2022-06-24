import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, loading, error] = useSignInWithGoogle(auth);

    const navigate = useNavigate();
    if (gUser) {
        return navigate('/')
    }
    return (
        <div className='mb-40 mt-40 '>
            <div id='login' className='grid grid-cols-1 justify-items-center'>
                <h2 className="text-center text-2xl font-bold">Sign Up</h2>
                <form> 
                <div className="">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="input w-96 input-bordered "
                        // {...register("email", {
                        //     required: {
                        //         value: true,
                        //         message: 'Email is Required'
                        //     },
                        //     pattern: {
                        //         value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        //         message: 'Provide a valid Email'
                        //     }
                        // })}
                        />
                        <label className="label">
                            {/* {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>} */}
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input w-96 input-bordered"
                        // {...register("password", {
                        //     required: {
                        //         value: true,
                        //         message: 'Password is Required'
                        //     },
                        //     minLength: {
                        //         value: 6,
                        //         message: 'Must be 6 characters or longer'
                        //     }
                        // })}
                        />
                        <label className="label">
                            {/* {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>} */}
                        </label>
                    </div>

                    <input className='btn  text-white' type="submit" value="Sign Up" />
                </form>
            </div>

            <p><small>New to Creative Agency <Link className='text-primary' to="/register">Create New Account</Link></small></p>

            <div className="divider">OR</div>
            <div className='flex justify-center  justify-items-center gap-3 '>
                <div className=''><img src="https://img.icons8.com/ios/50/000000/google-logo--v1.png" /></div>
                <div className='text-2xl ' >
                    <button
                        className='btn '
                        onClick={() => signInWithGoogle()}
                    >Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;