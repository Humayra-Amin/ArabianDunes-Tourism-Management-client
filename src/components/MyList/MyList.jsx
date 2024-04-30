import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import MyListTable from "../MyListTable/MyListTable";
import { useState } from "react";

const MyList = () => {
  const tour = useLoaderData();

  const [allTour, setAllTour] = useState(tour);
  console.log(allTour);
  return (
    <div className='flex flex-col items-center'>
      <Helmet>
        <title>ArabianDunes | My List</title>
        <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
      </Helmet>
      <h1 className="mt-10 text-5xl font-sedan text-center">My List</h1>

      <div className="overflow-x-auto mt-14">
        <table className="table table-xs md:table-md lg:table-lg border-amber-500 bg-amber-200">
          <thead className="text-xs md:text-[14px] lg:text-xl text-center">
            <tr>
              <th>Tourist Spot</th>
              <th>Travel Time</th>
              <th>Average Cost</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              allTour.map(tours => <MyListTable key={tours._id} tours={tours} allTour={allTour} setAllTour={setAllTour}></MyListTable>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
