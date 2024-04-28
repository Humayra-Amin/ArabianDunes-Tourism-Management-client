// import new1 from '../../assets/images/new1.png';
// import new2 from '../../assets/images/new2.png';

const Newsletter = () => {
    return (
        <div>

            <div className="hero h-[500px]" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1533850595620-7b1711221751?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dHJhdmVsbGluZ3xlbnwwfHwwfHx8MA%3D%3D)' }}>

                <div className="hero-overlay bg-opacity-80"></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl md:text-5xl lg:text-5xl font-roboto font-bold text-black">SUBSCRIBE TO OUR <span className="text-amber-500">NEWSLETTER</span></h1>
                        <p className="mb-5 text-black font-sedan font-semibold text-xl md:text-2xl lg:text-2xl">Sign up to receive the best offers on promotion and coupons.</p>

                        <label className="input input-bordered flex items-center gap-2 mb-4">
                            <input type="text" className="grow" placeholder="Email Here" />
                            <button className="btn bg-amber-500 text-black font-bold text-xl font-sedan">Subscribe</button>
                        </label>

                        {/* <div className='flex flex-col lg:flex-row justify-evenly'>
                            <div className='border-2 border-amber-500 w-[150px] h-[190px] lg:w-[350px] lg:h-[300px] hover:bg-slate-400 hover:cursor-pointer'>
                                <img src={new2} alt="" className='h-[90px] lg:h-[150px] ml-8 lg:ml-24' />
                                <h1 className="text-2xl lg:text-5xl font-bold text-black">100+ <br></br><span className='lg:text-4xl'>Awesome Tour</span></h1>
                            </div>

                            <div className='border-2 border-amber-500 w-[150px] h-[190px] lg:w-[350px] lg:h-[300px] hover:bg-slate-400 hover:cursor-pointer'>
                                <img src={new1} alt="" className='h-[80px] lg:h-[130px] ml-8 mt-2 lg:ml-24 lg:mt-6' />
                                <h1 className="text-2xl lg:text-5xl font-bold text-black">200+ <br></br><span className='lg:text-4xl'>New Destination</span></h1>
                            </div>
                        </div> */}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Newsletter;