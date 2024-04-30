import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logout from "../../assets/images/logout.png"

const UserProfile = () => {

    const { user } = useAuth();

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userImage, setUserImage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (user) {
            setUserName(user.displayName || '');
            setUserEmail(user.email || '')
            setUserImage(user.photoURL || '')
            setLoggedIn(true)
        }
        else {
            setLoggedIn(false)
        }
    }, [user])


    return (
        <div className="min-h-screen">

            <div>
                <div className="hero h-[400px] object-contain" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/thumbnails/039/035/354/small_2x/sign-of-log-in-log-out-sign-in-and-sign-out-on-yellow-background-photo.jpg'}}>
                    <div className="hero-overlay bg-opacity-10"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl text-black font-bold text-center font-sedan mt-[55px] md:mt-[100px] lg:mt-[100px]">User Information</h1>
                        </div>
                    </div>
                </div>
            </div>

            <Helmet>
                <title>ArabianDunes | User Profile</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div className="container mx-auto w-10/12 lg:w-4/5 text-center text-xl">

                {loggedIn ? (

                    <div className="card border-2 border-amber-600 bg-amber-200 mt-4 shadow-xl lg:w-[600px] lg:ml-[300px]">
                        <figure className="px-8 pt-8">
                            <img src={userImage} alt="" className="rounded-xl w-[200px]" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Name: <span className="font-normal">{userName}</span></h2>
                            <h2 className="card-title">Email: <span className="font-normal">{userEmail}</span></h2>
                        </div>
                    </div>

                ) : (

                    <div className="border-2 border-amber-600 bg-amber-200 lg:p-6 mt-6 lg:w-[500px] lg:ml-[330px]">
                        
                        <h1 className="font-sedan text-2xl text-black">You have been logged out</h1>
                        <p className="text-slate-400">Please login</p>

                        <img src={logout} alt="" className="h-[150px] ml-[100px] md:h-[200px] md:ml-[250px] lg:h-[200px] lg:ml-[150px]" />
                       
                        <div>

                        <button className="mt-10 mb-10"><Link to="/" className="btn-ghost bg-amber-300 border border-amber-600 text-black font-medium text-xl text-center rounded-xl p-2 font-sedan">Home</Link></button>

                        <button className="mt-10"><Link to="/login" className="btn-ghost bg-[#FACF39] border border-amber-600 text-black font-medium text-xl text-center ml-[80px] lg:ml-[180px] rounded-xl p-2 font-sedan">Login Page</Link></button>

                        </div>

                    </div>

                )}

            </div>
        </div>
    );
};

export default UserProfile;