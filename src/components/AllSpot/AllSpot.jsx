import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import TouristSpot from "../TouristSpot/TouristSpot";

const AllSpot = () => {

    const tour = useLoaderData();

    // const { _id, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitorsPerYear, image } = tours;

    return (
        <div className="container mx-auto w-10/12 lg:w-[75%]">
            <Helmet>
                <title>ArabianDunes | Tourist Spots</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-24">
                {
                    tour.map(tours => <TouristSpot key={tours._id} tours={tours}></TouristSpot>)
                }
            </div>

        </div>
    );
};

export default AllSpot;