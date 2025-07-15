import { useState } from "react";
import './Signup.css';

const Signup = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // showPasswordHandler
    const showPasswordHandler = () => {
        setShowPassword(!showPassword);
    }

    return (
        <div className="signUp w-full min-h-screen flex items-center justify-center">
            <div className="container mx-auto w-full px-2 sm:px-6 lg:px-8 py-10">
                <h1 className="text-center text-2xl md:text-3xl lg:text-4xl text-slate-700 font-medium">Register Here</h1>

                <form className="w-full sm:w-4/5 md:w-4/6 lg:w-2/6 mx-auto mt-10">
                    <div className="fullname w-full mb-4">
                        <label htmlFor="fullname">Fullname</label>
                        <input type="text" id="fullname" placeholder="Fullname" autoComplete="off" required className="custom-input"  />
                    </div>

                    <div className="email w-full mb-4">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" placeholder="Email address" autoComplete="off" required className="custom-input"  />
                    </div>

                    <div className="createPassword w-full mb-4">
                        <label htmlFor="createPassword">Create Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="createPassword" placeholder="Create Password" autoComplete="off" required className="custom-input"  />
                    </div>

                    <div className="repeatPassword w-full mb-4">
                        <label htmlFor="repeatPassword">Repeat Password</label>
                        <input type={showPassword ? 'text' : 'password'} id="repeatPassword" placeholder="Repeat Password" autoComplete="off" required className="custom-input"  />
                    </div>

                    <div className="phone w-full mb-4">
                        <label htmlFor="phone">Phone number</label>
                        <input type="number" id="phone" placeholder="Phone number" autoComplete="off" required className="custom-input"  />
                    </div>

                    <div className="mb-4 flex gap-2 text-sm">
                        <input type="checkbox" name="showPassCheckBox" onClick={showPasswordHandler}/>
                        <span>Show Password</span>
                    </div>

                    <button type="submit" className="w-full px-5 py-1 outline-none border border-gray-200 rounded-md hover:bg-gray-100 active:bg-transparent mt-2">Sign up</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;