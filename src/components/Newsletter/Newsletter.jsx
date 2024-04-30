
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

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Newsletter;