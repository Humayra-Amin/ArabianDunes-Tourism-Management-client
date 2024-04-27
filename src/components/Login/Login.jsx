import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";


const Login = () => {
    return (
        <div>
            <Helmet>
                <title>ArabianDunes | Login</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>
            <div className="hero min-h-screen bg-[#f8f8f8]">
                <div className="hero-content">
                    <div className="card shrink-0 mb-14 md:w-[500px] lg:w-[500px] border-2 bg-base-100 shadow-xl">

                        <form className="card-body">

                            <h1 className="flex justify-center text-xl lg:text-5xl text-black font-sedan">Login</h1>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <div className="relative">
                                    <input type="email" placeholder="email" className="input input-bordered pl-10 w-full" />
                                    <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#FACF39]"></FaEnvelope>
                                </div>

                                

                            </div>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <div className="relative">
                                    <input
                                        placeholder="password"
                                      
                                        className="input input-bordered pl-10 w-full" />
                                    <span className="absolute top-7 right-3 transform -translate-y-1/2 h-6 text-xl text-[#FACF39]">
                                        
                                    </span>
                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#FACF39]"></FaLock>
                                </div>

                            </div>


                            <div className="form-control mt-6">
                                <button className="btn bg-[#FACF39] text-black text-xl hover:bg-gray-200 hover:text-black hover:border-[#FACF39]">Login</button>
                            </div>


                            <label className="label text-[16px] font-medium text-gray-400">
                                Don’t have an account? <Link to="/register" className="label-text-alt link link-hover text-xl font-medium text-blue-600 underline font-sedan">Sign Up</Link>
                            </label>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;