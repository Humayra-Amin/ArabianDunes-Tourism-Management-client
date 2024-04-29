// import { Helmet } from "react-helmet-async";
// import { Link, useLoaderData} from "react-router-dom";

// const AllSpot = () => {

//     const tours = useLoaderData();

//     const { _id, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitorsPerYear, image } = tours;

//     return (
//         <div className="container mx-auto w-10/12 lg:w-[75%]">
//             <Helmet>
//                 <title>ArabianDunes | Tourist Spots</title>
//                 <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
//             </Helmet>

//             <div className="card lg:w-96 bg-amber-200 border-2 border-amber-500 mt-4">
//                 <figure className="px-10 pt-10">
//                     <img src={image} className="rounded-xl bg-[#F3F3F3] h-[230px] w-[350px] md:w-[800px] md:h-[200px] lg:w-[800px] lg:h-[200px]" />
//                 </figure>
//                 <div className="card-body">
//                     <div className="flex flex-col lg:flex-row lg:gap-14 gap-6">
//                         <h2 className="font-bold text-[19px] font-roboto">Tourist Spot: <span className="font-normal font-sedan">{tourists_spot_name}</span></h2>
//                     </div>

//                     <p className="lg:text-[16px] font-bold font-roboto">Travel Time: <span className="font-normal font-roboto">{travel_time}</span></p>

//                     <p className="lg:text-[16px] font-bold font-roboto">Seasonality: <span className="font-normal font-roboto">{seasonality}</span></p>

//                     <p className="lg:text-[16px] font-bold font-roboto">Total Visitors Per Year: <span className="font-normal font-roboto">{totalVisitorsPerYear}</span></p>

//                     <p className="lg:text-xl font-bold font-roboto text-red-500">Average Cost: <span className="font-normal font-roboto text-red-500">{average_cost}</span></p>

//                     <Link to={`/tours/${_id}`}>
//                         <button className="btn bg-[#FACF39] text-black border-amber-500 hover:bg-white hover:text-black hover:border-amber-300">View Details</button>
//                     </Link>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AllSpot;