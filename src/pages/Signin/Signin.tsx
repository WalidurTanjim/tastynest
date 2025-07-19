import { useState } from 'react';
import './Signin.css';
import { Link } from 'react-router-dom';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { useForm, type SubmitHandler } from "react-hook-form";

// react-hook-form input type
type Inputs = {
  email: string;
  password: string;
}

const Signin = () => {
    // states
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // showPasswordHandler
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }

    // react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    }

    return (
        <div className="signUp w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto w-full sm:w-4/5 md:w-4/6 lg:w-2/6 px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title='Signin Here' />

                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
                    <div className="email w-full mb-4">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Email address" autoComplete="off" required className="custom-input" {...register("email", { required: true })} />
                        {errors.email && <span className="text-sm text-red-600">This field is required</span>}
                    </div>

                    <div className="password w-full mb-4">
                        <label htmlFor="password">Create Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="password" placeholder="Create Password" autoComplete="off" required className="custom-input" {...register("password", { required: true })}  />
                        {errors.password && <span className="text-sm text-red-600">This field is required</span>}
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