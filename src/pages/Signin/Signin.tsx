import { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';

const Signin = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // showPasswordHandler
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="signUp w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto w-full sm:w-4/5 md:w-4/6 lg:w-2/6 px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-slate-700 font-medium">Signin Here</h1>

                <form className="w-fullmt-10">
                    <div className="email w-full mb-4">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Email address" autoComplete="off" required className="custom-input" />
                    </div>

                    <div className="password w-full mb-4">
                        <label htmlFor="password">Create Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Create Password" autoComplete="off" required className="custom-input" />
                    </div>

                    <div className="mb-4 flex gap-2 text-sm">
                        <input type="checkbox" name="showPassCheckBox" onClick={showPasswordHandler} />
                        <span>Show Password</span>
                    </div>

                    <button type="submit" className="w-full px-5 py-1 outline-none border border-gray-200 rounded-md hover:bg-gray-100 active:bg-transparent mt-2">Sign in</button>
                </form>

                <hr className="h-px bg-gray-200 border-none my-10 dark:bg-gray-700" />

                <div className='text-center'>
                    <h1 className='text-gray-600 text-sm'>Don't Have An Account? <Link to={`/signup`} className='text-blue-500 hover:text-blue-400 active:text-blue-500'>Signup</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Signin;