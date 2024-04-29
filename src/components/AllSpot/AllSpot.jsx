import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";

const AllSpot = () => {

    const tour = useLoaderData();

    // const { _id, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitorsPerYear, image } = tours;

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


            <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-10">
                {
                    tour.map(tours => <TouristSpot key={tours._id} tours={tours}></TouristSpot>)
                }
            </div>

        </div>
    );
};

export default AllSpot;