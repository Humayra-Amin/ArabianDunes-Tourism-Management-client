import { Helmet } from "react-helmet-async";
import { Link, useLoaderData } from "react-router-dom";

const SpotDetails = () => {

    const tours = useLoaderData();

    const { country_Name, tourists_spot_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, image } = tours;


    return (
        <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #FFFCB3)' }}>
            <Helmet>
                <title>ArabianDunes | Spot Details</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div>
                <div className="hero h-[500px] object-contain" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590959914819-b767b9fe4cfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl text-white font-extrabold font-sedan">Discover {tourists_spot_name} More Closely</h1>
                            <p className="mb-5 font-sedan text-lg font-extrabold font-roboto text-white">Immerse yourself in the enchanting allure of the {tourists_spot_name}. From the timeless grandeur of ancient civilizations to the vibrant pulse of modern cities, experience a tapestry of culture, history, and natural wonders.</p>
                            <Link to='/'><button className="btn bg-[#FACF39] border-[#FACF39] text-black text-xl">Go Home</button></Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto w-10/12 lg:w-4/5 font-roboto">

            <h2 className="text-5xl font-bold font-sedan mt-10 text-center">{country_Name}</h2>

                <div className="card lg:card-side mt-14 bg-amber-200 shadow-lg border-2 border-[#FACF39] font-roboto">

                    <figure><img src={image} alt="Album" className="rounded-t-lg lg:rounded-l-lg border bg-[#1313130D] w-[573px] h-[511px] lg:w-[500px] lg:h-[450px] md:w-[673px] md:h-[511px]" /></figure>

                    <div className="lg:ml-14">

                        <h2 className="card-title lg:text-5xl ml-4 lg:ml-1 mt-4 lg:mt-8 md:mt-2 md:ml-4 font-roboto">{tourists_spot_name}</h2>

                        <p className="lg:text-xl ml-4 mt-4 lg:ml-1 font-bold font-roboto md:ml-4">Location: <span className="font-normal">{location}</span></p>

                        <hr className="mt-4 lg:w-[650px] border-dashed border border-amber-500" />

                        <p className="lg:text-[18px] ml-4 lg:ml-1 mt-4 md:ml-4">{short_description}</p>

                        <hr className="mt-4 lg:w-[650px] border-dashed border border-amber-500" />                        
                        
                        <p className="lg:text-xl ml-4 mt-4 lg:ml-1 font-bold font-roboto md:ml-4">Travel Time: <span className="font-normal">{travel_time}</span></p>

                        <p className="lg:text-xl ml-4 mt-4 lg:ml-1 font-bold font-roboto md:ml-4">Seasonality: <span className="font-normal">{seasonality}</span></p>

                        <p className="lg:text-xl ml-4 mt-4 lg:ml-1 font-bold font-roboto md:ml-4">Total Visitors Per Year: <span className="font-normal">{totalVisitorsPerYear}</span></p>

                        <hr className="mt-4 lg:w-[650px] border-dashed border border-amber-500" />

                        <p className="lg:text-2xl ml-4 mt-4 lg:ml-1 font-bold text-red-500 font-roboto md:ml-4">Average Cost: <span className="font-normal text-red-500">{average_cost}</span></p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotDetails;