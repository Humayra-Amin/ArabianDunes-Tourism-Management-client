import { Helmet } from "react-helmet-async";
import { FaEnvelope, FaLink, FaLock, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #FFFCB3)' }}>
            <Helmet>
                <title>ArabianDunes | Register</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>
            <div className="hero min-h-screen">
                <div className="hero-content">
                    <div className="card shrink-0 mb-14 md:w-[500px] lg:w-[500px] border-2 bg-base-100 shadow-xl">

                        <form className="card-body">

                            <h1 className="flex justify-center text-xl lg:text-5xl text-black font-sedan">Register</h1>

                            <div className="form-control">

                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>

                                <div className="relative">
                                    <input type="text" placeholder="fullname" className="input input-bordered pl-10 w-full" />
                                    <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#FACF39]"></FaUser>
                                </div>

                              
                            </div>


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
                                    <span className="label-text">Image Url</span>
                                </label>

                                <div className="relative">
                                    <input type="text" placeholder="imageURL"className="input input-bordered pl-10 w-full" />
                                    <FaLink className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#FACF39]"></FaLink>
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

                                    <FaLock className="absolute top-1/2 left-3 transform -translate-y-1/2 h-6 text-[#FACF39]"></FaLock>

                                </div>

                            </div>

                            <div className="form-control mt-6">
                                <button className="btn bg-[#FACF39] text-black text-xl hover:bg-gray-200 hover:text-black hover:border-[#FACF39]">Register</button>
                            </div>

                            <label className="label text-[16px] font-medium text-gray-400">
                                Have an account? <Link to="/login" className="label-text-alt link link-hover text-xl font-medium text-blue-600 underline font-sedan">Login</Link>
                            </label>

                            <SocialLogin></SocialLogin>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Register;