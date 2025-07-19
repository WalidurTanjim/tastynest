import { useState } from "react";
import './Signup.css';
import { Link } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { useForm, type SubmitHandler } from "react-hook-form";

// react-hook-form input type
type Inputs = {
  fullname: string;
  email: string;
  createPassword: string;
  repeatPassword: string;
  phone: string;
}

const Signup = () => {
    // states
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const passRegEx = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z]).{6,}$/;

    // showPasswordHandler
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }


    // react-hook-form
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // password validation
        if(!passRegEx.test(data?.createPassword)){
            return alert("Password must be follow the rules");
        }
        if(data?.repeatPassword !== data?.createPassword){
            return alert("Both are not same");
        }

        console.log(data);
    }

    return (
        <div className="signUp w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto w-full sm:w-4/5 md:w-4/6 lg:w-2/6 px-2 sm:px-6 lg:px-8 py-10">
                <SectionTitle title="Signup Here" />

                <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-10">
                    <div className="fullname w-full mb-4">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" id="fullname" placeholder="Fullname" autoComplete="off" required className="custom-input" {...register("fullname", { required: true })}  />
                        {errors.fullname && <span className="text-sm text-red-600">This field is required</span>}
                    </div>

                    <div className="email w-full mb-4">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Email address" autoComplete="off" required className="custom-input" {...register("email", { required: true })}  />
                        {errors.email && <span className="text-sm text-red-600">This field is required</span>}
                    </div>

                    <div className="createPassword w-full mb-4">
                        <label htmlFor="createPassword">Create Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="createPassword" placeholder="Create Password" autoComplete="off" required className="custom-input" {...register("createPassword", { required: true })}  />
                        {errors.createPassword && <span className="text-sm text-red-600">This field is required</span>}
                    </div>

                    <div className="repeatPassword w-full mb-4">
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="repeatPassword" placeholder="Repeat Password" autoComplete="off" required className="custom-input" {...register("repeatPassword", { required: true })}  />
                        {errors.repeatPassword && <span className="text-sm text-red-600">This field is required</span>}
                    </div>

                    <div className="phone w-full mb-4">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" id="phone" placeholder="Phone number" autoComplete="off" required className="custom-input" {...register("phone", { required: true })}  />
                        {errors.phone && <span className="text-sm text-red-600">This field is required</span>}
                    </div>

                    <div className="mb-4 flex gap-2 text-sm">
                        <input type="checkbox" name="showPassCheckBox" onClick={showPasswordHandler}/>
                        <span>Show Password</span>
                    </div>

                    <button type="submit" className="w-full px-5 py-1 outline-none border border-gray-200 rounded-md hover:bg-gray-100 active:bg-transparent mt-2">Sign up</button>
                </form>

                <hr className="h-px bg-gray-200 border-none my-10 dark:bg-gray-700" />

                <div className='text-center'>
                    <h1 className='text-gray-600 text-sm'>Already Have An Account? <Link to={`/signin`} className='text-blue-500 hover:text-blue-400 active:text-blue-500'>Signin</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default Signup;