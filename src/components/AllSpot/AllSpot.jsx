import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";
import { useState } from "react";

const AllSpot = () => {

    const tour = useLoaderData();
    const [sortBy, setSortBy] = useState('');

    const handleSortBy = (descOrder) => {
        setSortBy(descOrder);
    }

    const sortTours = [...tour];

    if (sortBy === 'totalVisitorsPerYear') {
        sortTours.sort((a, b) => a.totalVisitorsPerYear - b.totalVisitorsPerYear);
    }

    
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #FFFFFF, #FFFCB3)' }}>
            <Helmet>
                <title>ArabianDunes | All Tourist Spots</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div>

                <div className="hero h-[470px] object-contain" style={{ backgroundImage: 'url(https://deih43ym53wif.cloudfront.net/mosque-al-rifai-madrasa-sultan-hassan-cairo-egypt-shutterstock_524770465_fcf9f41c00.jpeg'}}>
                    <div className="hero-overlay bg-opacity-50"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h2 className="text-4xl md:text-7xl lg:text-7xl font-sedan font-semibold lg:p-4 text-black">All Tourist Spots</h2>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className="text-center items-center justify-center ">
                <details className="dropdown">
                    <summary className="btn bg-amber-400 mt-4 text-black px-6 py-4 m-1 hover:bg-white hover:text-black border-2 hover:border-amber-300">Sort By</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                        <li><button onClick={() => handleSortBy('totalVisitorsPerYear')}>Average Cost</button></li>
                    </ul>
                </details>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    sortTours.map(tours => <TouristSpot key={tours._id} tours={tours}></TouristSpot>)
                }
            </div>

        </div>
    );
};

export default AllSpot;