import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateSpot = () => {
    const tours = useLoaderData();

    const { _id, tourists_spot_name, average_cost, seasonality, travel_time, totalVisitorsPerYear, image, name, email, short_description, country_Name } = tours;

    const handleUpdateSpot = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const email = form.email.value;
        const country_Name = form.country_Name.value;
        const tourists_spot_name = form.tourists_spot_name.value;
        const location = form.location.value;
        const short_description = form.short_description.value;
        const average_cost = form.average_cost.value;
        const seasonality = form.seasonality.value;
        const travel_time = form.travel_time.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const image = form.image.value;

        const updatedSpot = { name, email, country_Name, tourists_spot_name, location, short_description, average_cost, seasonality, travel_time, totalVisitorsPerYear, image }
        console.log(updatedSpot)

        fetch(`http://localhost:5000/tours/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSpot)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success',
                        text: 'Updated the Tourist Spot Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }


    return (
        <div>
            <Helmet>
                <title>ArabianDunes | Update Spot</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div className="bg-[#F4F3F0] p-10">
                <h2 className="text-5xl font-bold font-sedan mb-10 text-center">Update Tourist Spot</h2>
                <form onSubmit={handleUpdateSpot} className="border-2 border-amber-600 p-14 bg-white shadow-xl rounded-xl">


                    {/* Row 1 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="form-control w-full">
                                <div className="label">
                                    <span className="label-text-alt">Country</span>
                                </div>
                                <select name="country_Name" defaultValue={country_Name} className="select select-bordered">
                                    <option disabled selected>Select Country</option>
                                    <option value="Jordan">Jordan</option>
                                    <option value="Saudi Arabia">Saudi Arabia</option>
                                    <option value="United Arab Emirates">United Arab Emirates</option>
                                    <option value="Kuwait">Kuwait</option>
                                    <option value="Qatar">Qatar</option>
                                    <option value="Iran">Iran</option>
                                </select>
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Spot Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="tourists_spot_name" defaultValue={tourists_spot_name} placeholder="Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 2 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" defaultValue={location} placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short_description" defaultValue={short_description}placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 3 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="average_cost" defaultValue={average_cost} placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" defaultValue={seasonality} placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 4 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travel_time" defaultValue={travel_time} placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Total Visitors Per Year</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="totalVisitorsPerYear" defaultValue={totalVisitorsPerYear}placeholder="Total Visitors Per Year" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 5 */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" defaultValue={image} placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>


                    <input type="submit" value="Update Spot" className="btn btn-block bg-[#FACF39] border-amber-800 border-2 text-black text-3xl" />

                </form>
            </div>

        </div>
    );
};

export default UpdateSpot;