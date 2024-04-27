import { Helmet } from "react-helmet-async";

const AddSpot = () => {
    return (
        <div>
            <Helmet>
                <title>ArabianDunes | Add Spot</title>
                <link rel="icon" type="image/jpg" href="/src/assets/images/logos.jpg" />
            </Helmet>

            <div className="bg-[#F4F3F0] p-10">
                <h2 className="text-5xl font-bold font-sedan mb-10 text-center">Add Tourist Spot</h2>
                <form className="border-2 p-14 bg-white">

                    
                    {/* Row 1 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="email" placeholder="Email" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 2 */}
                    <div className="md:flex mb-8 gap-5">

                    <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Country</span>
                    </label>
                    <label className="select select-bordered w-full">
                        <select>
                            <option value="">Select Country</option>
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
                                <input type="text" name="tourists_spot_name" placeholder="Spot Name" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 3 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Location</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="location" placeholder="Location" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 4 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="average_cost" placeholder="Average Cost" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Seasonality</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="seasonality" placeholder="Seasonality" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>

                    {/* Row 5 */}
                    <div className="md:flex mb-8 gap-5">

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="travel_time" placeholder="Travel Time" className="input input-bordered w-full" />
                            </label>
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text">Image URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                            </label>
                        </div>

                    </div>


                    <input type="submit" value="Add Spot" className="btn btn-block bg-[#FACF39] border-amber-800 border-2 text-black text-3xl" />

                </form>
            </div>

        </div>
    );
};

export default AddSpot;